import SidebarComponent from "@/components/DashboardComponents/Sidebar/SidebarComponent";
import React from "react";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: "Dashboard",
    description: "Among-Ecommerce Website",
    keywords: ["shop", "ecommerce", "sell"],
    openGraph: {
        title: "Dashboard",
        description: "Among-Ecommerce Website",
        images: [
            "https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-online-shop-smartphone_23-2151201769.jpg?t=st=1711445270~exp=1711448870~hmac=a9bdd24fb0e0c9bf61350249a48a4fba5bdac187bf6c2bba8f38a9f481ccf612&w=1480",
        ],
    },
};
export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <aside className="flex w-full">
            <SidebarComponent/>
            {children}
        </aside>
    );
}