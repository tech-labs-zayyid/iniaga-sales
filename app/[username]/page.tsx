"use client";

import { motion } from "framer-motion";
import { Car, User, Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronDown, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDynamicUrl } from "@/lib/geturl";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home({ params }: { params: { username: string } }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [banners, setBanners] = useState<any[]>([]);
  const productsUrl = useDynamicUrl("/products");
  const productUrl = useDynamicUrl("/product");

  useEffect(() => {
    axios.get(`https://apiniaga.zayyid.com/public/home/${params.username}`)
        .then((response) => {
            if (response.data.status === "success") {
                setData(response.data.data);
                setBanners(response.data.data.banner || []);
            } else {
                setError("Gagal mengambil data.");
            }
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Banner Carousel */}
      <div className="pt-16">
        <div className="relative h-[600px] overflow-hidden">
          {banners.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              loop
              className="h-full"
            >
              {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={banner.image_url}
                      alt={banner.description}
                      fill
                      className="object-cover"
                    />
                    {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center px-6">
                      <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold">{banner.description}</h1>
                        <p className="text-lg mt-2">{banner.subtitle}</p>
                      </div>
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">No banners available</p>
            </div>
          )}
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
                src={data?.url_image}
                alt="Sales Profile"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{data?.fullname || ''}</h2>
              <p className="text-gray-600 mb-6">
                {
                  data?.desc || ''
                }
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600" />
                  <span>{data?.phone_number || ''}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" />
                  <span>{data?.email || ''}</span>
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
            {data?.product?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data?.product?.map((product: any) => (
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
                      <h3 className="text-xl font-semibold mb-2">{product.product_name}</h3>
                      <p className="text-gray-600 mb-4">{product.price}</p>
                      <div>
                        {/* <Link href={useDynamicUrl("/product", '1')} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
                          Tanya Produk
                        </Link>
                        <Link href={useDynamicUrl("/product", '2')} className="ml-1 w-full border hover:bg-gray-50 border-gray-300 text-gray-700 px-4 py-2 rounded transition">
                          Detail
                        </Link> */}

                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 flex items-center justify-center h-60 rounded-md">
                <p className="text-gray-500">No Product available</p>
              </div>
            )}
          <div className="text-center mt-12">
            <Link
              href={productsUrl}
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
            {data?.gallery?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {data?.gallery?.map((item: any) => (
                  <motion.div
                    key={item.id_gallery}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative h-64 group overflow-hidden rounded-lg"
                  >
                    <Image
                      src={`${item.image_url}`}
                      alt={`Gallery`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 flex items-center justify-center h-60 rounded-md">
                <p className="text-gray-500">No Gallery available</p>
              </div>
            )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
            {data?.testimony?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data?.testimony?.map((testimonial: any, index: any) => (
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
                        src={testimonial.photo_url}
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
                    <p className="text-gray-600">{testimonial.description}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-200 flex items-center justify-center h-60 rounded-md">
                <p className="text-gray-500">No Testimoni available</p>
              </div>
            )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">{data?.fullname || ''}</span>
              </div>
              <p className="text-gray-400 mb-6">
                {data?.desc || ''}
              </p>
              <div className="flex space-x-4">
                {
                  data?.social_media?.map((itm:any) => {
                    if(itm?.social_media_name === 'youtube'){
                      return(
                        <Link target="_blank" href={itm?.link_embed} className="text-gray-400 hover:text-blue-400 transition">
                          <YoutubeIcon className="h-6 w-6" />
                        </Link>
                      )
                    }
                  })
                }
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