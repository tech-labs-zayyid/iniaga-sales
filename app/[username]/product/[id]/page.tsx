import { Metadata } from 'next';
import ClientProduct from './client';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // const product = await fetch(`https://api.example.com/products/${params.id}`).then((res) => res.json());

  return {
    title: `Toyota Camry - Buy Now`,
    description: "Jual Mobil Toyota Camry dengan harga terbaik di Eko Toyota",
    openGraph: {
      title: `Toyota Camry - Buy Now`,
      description: "Jual Mobil Toyota Camry dengan harga terbaik di Eko Toyota",
      images: ['https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU'],
    },
    twitter: {
      card: "summary_large_image",
      title: `Toyota Camry - Buy Now`,
      description: "Jual Mobil Toyota Camry dengan harga terbaik di Eko Toyota",
      images: ['https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU'],
    },
  };
}

function App() {
  return (
    <>
      <ClientProduct />
    </>
  );
}

export default App;