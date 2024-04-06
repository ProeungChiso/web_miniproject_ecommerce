import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import NextUILayout from "@/app/NextUIProvider";
import NavbarComponent from "@/components/SiteComponents/Navbar/NavbarComponent";
import FooterComponent from "@/components/SiteComponents/Footer/FooterComponent";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: "%s - AmongE",
    default: "Among-Ecommerce",
  },
  description: "Among-Ecommerce Website",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: {
      template: "%s - AmongE",
      default: "Among-Ecommerce",
    },
    description: "Among-Ecommerce Website",
    images: [
      "https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-online-shop-smartphone_23-2151201769.jpg?t=st=1711445270~exp=1711448870~hmac=a9bdd24fb0e0c9bf61350249a48a4fba5bdac187bf6c2bba8f38a9f481ccf612&w=1480",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUILayout>
          <NavbarComponent/>
          {children}
          <FooterComponent/>
        </NextUILayout>
      </body>
    </html>
  );
}
