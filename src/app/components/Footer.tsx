// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      {/* <p>© 2024 Hoetzin. All rights reserved.</p> */}
      <p>© {new Date().getFullYear()} Hoetzin. All rights reserved.</p>
    </footer>
  );
}
