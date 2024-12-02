"use client";

import { usePathname } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HideHeaderFooterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define the routes where the header or footer should be hidden
  const hideHeaderFooterRoutes = ["/contact", "/special-page"];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}
