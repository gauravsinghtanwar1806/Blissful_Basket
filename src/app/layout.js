import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: '--font-poppins'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-playfair'
});

export const metadata = {
  title: "Blissfull Basket — Curated hampers made with love 💝",
  description: "Aesthetic, thoughtfully curated gift hampers. Perfect for every occasion! Order via Instagram.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${poppins.variable} ${playfair.variable} font-sans flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
