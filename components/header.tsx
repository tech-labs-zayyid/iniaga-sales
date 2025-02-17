"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { Car, User, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <nav className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Eko Toyota</span>
            </Link>
            <div className="space-x-8">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <div className="relative inline-block group">
                <button
                  className="flex items-center space-x-1 hover:text-blue-600 transition focus:outline-none"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4 transition-transform" style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>

                {/* Dropdown dengan animasi */}
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-48 bg-white shadow-lg rounded-lg mt-2 py-2 z-50"
                  >
                    <Link href="/products?c=SUV" className="block px-4 py-2 hover:bg-blue-50">SUV</Link>
                    <Link href="/products?c=MPV" className="block px-4 py-2 hover:bg-blue-50">MPV</Link>
                    <Link href="/products?c=Sedan" className="block px-4 py-2 hover:bg-blue-50">Sedan</Link>
                    <Link href="/products?c=Hatchback" className="block px-4 py-2 hover:bg-blue-50">Hatchback</Link>
                  </motion.div>
                )}
              </div>
              <Link href="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
