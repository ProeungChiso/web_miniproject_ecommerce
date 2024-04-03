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

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];
    const pathName = usePathname();
    if(pathName === "/dashboard"){
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
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/best-seller">
                        Best Seller
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/products">
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/about-us">
                        About us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/dashboard" className="text-violet-800">Go Dashboard</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} className="bg-violet-800 text-white" href="#" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
