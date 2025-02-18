// metadata.ts
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Toyota Camry - Buy Now`,
    description: "Jual Mobil Toyota Camry dengan harga terbaik di Eko Toyota",
    openGraph: {
      title: `Toyota Camry - Buy Now`,
      description: "Jual Mobil Toyota Camry dengan harga terbaik di Eko Toyota",
      images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80'],
    },
    twitter: {
      card: "summary_large_image",
      title: `Toyota Camry - Buy Now`,
      description: "Jual Mobil Toyota Camry dengan harga terbaik di Eko Toyota",
      images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80'],
    },
  };
}
