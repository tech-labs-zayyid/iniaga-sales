"use client";

import { motion } from "framer-motion";
import { Car, User, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronDown } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      title: "Find Your Dream Car Today",
      subtitle: "Professional car sales consultant ready to help you find the perfect vehicle"
    },
    {
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066&auto=format&fit=crop",
      title: "Exclusive Deals Available",
      subtitle: "Get the best prices on your favorite car models"
    },
    {
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
      title: "Premium Selection",
      subtitle: "Explore our curated collection of luxury vehicles"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "Toyota Fortuner",
      price: "Rp 589.000.000",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2156&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Honda CR-V",
      price: "Rp 489.000.000",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Mitsubishi Xpander",
      price: "Rp 289.000.000",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      comment: "Pelayanan sangat memuaskan dan proses cepat!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Jane Smith",
      comment: "Sales yang sangat profesional dan informatif",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "John Doe",
      comment: "Pelayanan sangat memuaskan dan proses cepat!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Jane Smith",
      comment: "Sales yang sangat profesional dan informatif",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Meta Tags */}
      <Head>
        <title>Eko Toyota - Find Your Dream Car | Best Car Sales</title>
        <meta name="description" content="Eko Toyota - Find the best car deals and professional consultation to get your dream vehicle today!" />
        <meta name="keywords" content="car sales, buy car, best cars, luxury cars, new cars, used cars" />
        <meta name="author" content="iniaga.id" />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Eko Toyota - Find Your Dream Car | Best Car Sales" />
        <meta property="og:description" content="Eko Toyota - Find the best car deals and professional consultation to get your dream vehicle today!" />
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eko Toyota - Find Your Dream Car | Best Car Sales" />
        <meta name="twitter:description" content="Eko Toyota - Find the best car deals and professional consultation to get your dream vehicle today!" />
        <meta name="twitter:image" content="https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU" />

        {/* WhatsApp akan mengambil metadata dari Open Graph */}
      </Head>
      {/* Hero Banner Carousel */}
      <div className="pt-16">
        <div className="relative h-[600px] overflow-hidden">
          {banners.map((banner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                x: currentSlide === index ? 0 : (currentSlide > index ? -100 : 100)
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                <div className="max-w-5xl mx-auto px-4 h-full flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl text-white"
                  >
                    <h1 className="text-5xl font-bold mb-4">{banner.title}</h1>
                    <p className="text-xl mb-8">{banner.subtitle}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition">
                      Contact Us
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-blue-600 w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* About Sales */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU"
                alt="Sales Profile"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Trusted Car Sales Consultant</h2>
              <p className="text-gray-600 mb-6">
                With over 10 years of experience in the automotive industry, I am committed to providing
                the best service and finding the perfect vehicle that matches your needs and budget.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="text-blue-600" />
                  <span>Professional and experienced</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600" />
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" />
                  <span>Quick response time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Products */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Best Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <Link href={'/product/1'} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full transition"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-64 group overflow-hidden rounded-lg"
              >
                <Image
                  src={`https://images.unsplash.com/photo-1557305089-5da8109b753b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt={`Gallery ${item}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Details</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">AutoPro Sales</span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner in finding the perfect vehicle for your needs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-blue-400 transition">Home</Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-blue-400 transition">Products</Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-blue-400 transition">Gallery</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-blue-400 transition">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">+62 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">sales@autopro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Working Hours</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Monday - Friday</li>
                <li className="pl-4">9:00 AM - 6:00 PM</li>
                <li>Saturday</li>
                <li className="pl-4">9:00 AM - 3:00 PM</li>
                <li>Sunday</li>
                <li className="pl-4">Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 AutoPro Sales. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}