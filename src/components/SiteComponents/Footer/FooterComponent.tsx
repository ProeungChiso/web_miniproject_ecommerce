"use client";

import {Footer} from "flowbite-react";
import {usePathname} from "next/navigation";

export default function FooterComponent() {
    const pathName = usePathname();
    if (pathName === "/dashboard") {
        return null
    }
    return (
        <footer className="w-full bg-violet-800 shadow mt-10">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-50 sm:text-center">© 2024
                    <a href="/" className="hover:underline"> CSTAD™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-50 sm:mt-0">
                    <li>
                        <a href="/about-us" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="/policy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
