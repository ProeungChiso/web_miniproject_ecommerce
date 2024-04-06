"use client";
import { Sidebar } from "flowbite-react";
import {sideBarItem} from "@/types/sidebar";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
export default function DashboardSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);
    return (
        <div>
            <button
                className={`pt-[16px] text-gray-600] ${
                    isOpen ? "pl-[220px]" : "hidden"
                } fixed hover:text-gray-900 lg:hidden`}
                onClick={toggleSidebar}
                aria-label="Open sidebar"
            >
                <HiX size={24} />
            </button>
            <button
                className={`pt-[16px] text-gray-600] ${
                    isOpen ? "hidden" : "pl-[20px]"
                } fixed hover:text-gray-900 lg:hidden`}
                onClick={toggleSidebar}
                aria-label="Open sidebar"
            >
                <HiMenu size={24} />
            </button>
            <div className={`${isOpen ? "block" : "hidden"} lg:block`}>
                <Sidebar className={`h-[92.5vh] `} aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            {sideBarItem.map((item, index) => (
                                <Sidebar.Item key={index} href={item.path} icon={item.icon}>
                                    {item.title}
                                </Sidebar.Item>
                            ))}
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
    );
}