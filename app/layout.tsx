import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
import { ClerkProvider } from '@clerk/nextjs';
import Footer from '@/components/footer/Footer';  // Импортируем компонент Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Camino Tiger',
  description: 'Book your Accomodation on Camino de Santiago!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
            {/* Добавляем Footer после основного контента */}
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
