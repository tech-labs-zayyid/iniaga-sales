"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Filter, X } from "lucide-react"
import Link from "next/link"

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get("c")

  useEffect(() => {
    setSelectedCategory(search)
  }, [search])

  const allProducts = [
    { name: "Toyota Camry", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80", description: "Sedan ikonik yang menetapkan standar untuk kenyamanan dan keandalan.", price: "Mulai dari Rp 799.000.000", category: "Sedan" },
    { name: "Toyota RAV4", image: "https://images.unsplash.com/photo-1633696699971-ae0e14c3f10e?w=800&q=80", description: "SUV siap petualangan dengan fitur keselamatan canggih.", price: "Mulai dari Rp 899.000.000", category: "SUV" },
    { name: "Toyota Highlander", image: "https://images.unsplash.com/photo-1632183903330-62c5df4767f9?w=800&q=80", description: "SUV ramah keluarga dengan fitur premium.", price: "Mulai dari Rp 999.000.000", category: "SUV" },
    { name: "Toyota Corolla", image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&q=80", description: "Sedan kompak dengan efisiensi bahan bakar tinggi.", price: "Mulai dari Rp 499.000.000", category: "Sedan" },
    { name: "Toyota Innova", image: "https://images.unsplash.com/photo-1625076307714-a0ce1aa4509c?w=800&q=80", description: "MPV serbaguna untuk keluarga modern.", price: "Mulai dari Rp 399.000.000", category: "MPV" },
    { name: "Toyota Fortuner", image: "https://images.unsplash.com/photo-1625077427338-8e511f53b27c?w=800&q=80", description: "SUV tangguh dengan kemampuan off-road.", price: "Mulai dari Rp 599.000.000", category: "SUV" }
  ]

  const categories = Array.from(new Set(allProducts.map(product => product.category)))

  const filteredProducts = selectedCategory
    ? allProducts.filter(product => product.category === selectedCategory)
    : allProducts

  const clearCategoryFilter = () => {
    setSelectedCategory(null)

    // Hapus query param `c` dari URL
    const params = new URLSearchParams(searchParams.toString())
    params.delete("c")
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  const FilterSection = () => (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Kategori</h2>
      <div className="space-y-2">
        <button
          onClick={clearCategoryFilter}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === null ? "bg-blue-600 text-white" : "hover:bg-gray-100"
          }`}
        >
          Semua
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              router.replace(`?c=${category}`, { scroll: false }) // Update query param
            }}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category ? "bg-blue-600 text-white" : "hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Semua Produk Toyota</h1>
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-gray-600"
          >
            <Filter className="h-5 w-5" />
            Filter
          </button>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSection />
            </div>
          </div>

          {/* Mobile Filter Sidebar */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
              <div className="absolute right-0 top-0 h-full w-64 bg-white p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Filter</h2>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-gray-500"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <FilterSection />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.name} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-blue-600 font-semibold mb-4">{product.price}</p>
                    <div className="flex gap-4">
                      <Link href={'/product/1'} className="w-full bg-blue-600 text-center hover:bg-blue-700 text-white px-4 py-2 rounded transition">
                        Detail
                      </Link>
                      <Button variant="outline" className="flex-1">Test Drive</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
