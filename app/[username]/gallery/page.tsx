"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GalleryCard from '@/components/gallerycard';
import { ImageIcon, Car } from 'lucide-react';

const Gallery: React.FC = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://54da-114-10-148-9.ngrok-free.app/sales/gallery');
        if (response.data.status === "success" && response.data.data) {
          setImages(response.data.data.data_list.map((item: any) => ({
            id: item.id_gallery,
            url: item.image_url
          })));
        }
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <Car className="w-12 h-12 mx-auto mb-4 text-gray-400 animate-pulse" />
          <p className="text-gray-500">Loading delivery documentation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Car Delivery Gallery</h1>
          <p className="text-lg text-gray-600">
            Documenting our commitment to excellence in every delivery
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Building trust through transparent and professional service
          </p>
        </div>
        
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, idx) => (
            <GalleryCard key={idx} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
