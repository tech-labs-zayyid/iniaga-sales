import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { ParallaxProvider } from 'react-scroll-parallax';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AutoPro Sales - Your Trusted Car Dealer',
  description: 'Find your dream car with our professional car sales consultant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}