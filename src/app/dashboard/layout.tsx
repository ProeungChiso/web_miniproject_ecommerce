import SidebarComponent from "@/components/DashboardComponents/Sidebar/SidebarComponent";
import React from "react";
export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <aside className="flex">
            <SidebarComponent/>
            {children}
        </aside>
    );
}