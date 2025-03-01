// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Camino Tiger. All Rights Reserved.</p>
        <div className="mt-4">
          <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
