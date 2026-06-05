import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OrangBaik.id",
  description:
    "OrangBaik.id adalah platform donasi, zakat, infak, sedekah, dan galang dana online untuk mendukung program kemanusiaan, pendidikan, dan sosial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

      </body>
    </html>
  );
}