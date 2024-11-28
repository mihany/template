// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
