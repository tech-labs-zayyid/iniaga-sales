"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Car, ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Tutup dropdown ketika pindah halaman
  useEffect(() => {
    setDropdownOpen(false);
  }, [router]);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">Eko Toyota</span>
        </Link>

        {/* Menu Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Menu */}
        <div className={`md:flex md:items-center md:space-x-8 ${isMenuOpen ? "block" : "hidden"} absolute md:relative top-16 md:top-0 left-0 md:flex-row flex flex-col w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
          <Link href="/" className="hover:text-blue-600 transition py-2 md:py-0">Home</Link>

          {/* Dropdown */}
          <div className="relative group py-2 md:py-0" ref={dropdownRef}>
            <button className="flex items-center space-x-1 hover:text-blue-600 transition focus:outline-none" onClick={() => setDropdownOpen((prev) => !prev)}>
              <span>Products</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute md:w-48 bg-white shadow-lg rounded-lg mt-2 py-2 z-50 md:left-auto left-4 right-4"
              >
                <Link href="/products?c=SUV" className="block px-4 py-2 hover:bg-blue-50">SUV</Link>
                <Link href="/products?c=MPV" className="block px-4 py-2 hover:bg-blue-50">MPV</Link>
                <Link href="/products?c=Sedan" className="block px-4 py-2 hover:bg-blue-50">Sedan</Link>
                <Link href="/products?c=Hatchback" className="block px-4 py-2 hover:bg-blue-50">Hatchback</Link>
              </motion.div>
            )}
          </div>

          <Link href="/gallery" className="hover:text-blue-600 transition py-2 md:py-0">Gallery</Link>
          <Link href="/register" className="hover:text-blue-600 transition py-2 md:py-0">Register Agen</Link>
        </div>
      </nav>
    </header>
  );
}
