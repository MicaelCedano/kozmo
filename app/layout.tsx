import type { Metadata } from "next";
import "./globals.css";
import { product } from "@/lib/product";

export const metadata: Metadata = { title: product.name, description: `Una nueva forma de verlo todo. Descubre ${product.name}.` };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html>; }
