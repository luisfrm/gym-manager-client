import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Navigation from "@/components/Navigation";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'], // Light, Regular, Medium, Bold
  style: ['normal'], // Add 'italic' if needed
  subsets: ['latin'], // Include necessary subsets (e.g., 'latin-ext' for extended Latin)
  display: 'swap', // Ensures font loads without causing layout shift
});

export const metadata: Metadata = {
  title: "Marivi Gym",
  description: 'Marivi Gym es un gimnasio de alta calidad que ofrece servicios de entrenamiento personalizado y grupal.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={roboto.className}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
