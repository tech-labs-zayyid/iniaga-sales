import React from 'react';

interface GalleryCardProps {
  image: {
    id: string;
    url: string;
    title: string;
    customerName: string;
    carModel: string;
    deliveryDate: string;
    height: number;
  };
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image }) => {
  return (
    <div className="break-inside-avoid mb-4">
      <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto object-cover"
            loading="lazy"
            style={{ minHeight: `${image.height}px` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold">{image.carModel}</h3>
              <p className="text-sm opacity-90">Delivered to: {image.customerName}</p>
              <p className="text-sm opacity-90">{image.deliveryDate}</p>
              <p className="text-sm mt-1 opacity-80">{image.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;