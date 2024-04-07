'use client'
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    Image
} from "@nextui-org/react";
import {usePathname} from "next/navigation";
import {navigateItems} from "@/types/navigation";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathName = usePathname();
    if(pathName === "/dashboard" || pathName === "/login" || pathName === "/register" || pathName === "/dashboard/create-product" || pathName === "/dashboard/edit-product")  {
        return null
    }
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit"><span className="text-violet-800">Among</span>-Ecommerce</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navigateItems.map((item, index: any) => (
                    <NavbarItem key={index}>
                        <Link
                            color="foreground"
                            href={item.path}
                            className={`${
                                pathName === item.path && "font-bold text-violet-800"
                            }`}
                        >
                            {item.title}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/dashboard" className="text-violet-800">Go Dashboard</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} className="bg-violet-800 text-white" href="/register" variant="flat">
                        Register
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {navigateItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            href={item.path}
                            size="lg"
                        >
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <NavbarItem>
                    <Link href="/dashboard" size="lg">Go Dashboard</Link>
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
    );
}
