import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { ParallaxProvider } from 'react-scroll-parallax';
import Header from '@/components/header';
const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'AutoPro Sales - Your Trusted Car Dealer',
//   description: 'Find your dream car with our professional car sales consultant',
// };
// export const metadata: Metadata = {
//   title: "Eko Toyota - Find Your Dream Car | Best Car Sales",
//   description: "Eko Toyota - Find the best car deals and professional consultation to get your dream vehicle today!",
//   keywords: "car sales, buy car, best cars, luxury cars, new cars, used cars",
//   authors: [{ name: "iniaga.id" }],
//   openGraph: {
//     title: "Eko Toyota - Find Your Dream Car | Best Car Sales",
//     description: "Eko Toyota - Find the best car deals and professional consultation to get your dream vehicle today!",
//     images: ["https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU"],
//     url: "https://yourwebsite.com",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Eko Toyota - Find Your Dream Car | Best Car Sales",
//     description: "Eko Toyota - Find the best car deals and professional consultation to get your dream vehicle today!",
//     images: ["https://media.licdn.com/dms/image/v2/C5603AQHrVI9o3JZw4w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1592757080803?e=2147483647&v=beta&t=6cWMwY2THK1cR77yfFRa_cB69xhy3bOAow6D9n6D0yU"],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}