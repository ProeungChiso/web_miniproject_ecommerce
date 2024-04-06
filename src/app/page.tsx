import CardProductComponent from "@/components/SiteComponents/Card/CardProductComponent";
import HeroSectionComponent from "@/components/SiteComponents/HeroSection/HeroSectionComponent";
import {productType} from "@/types/product";
import {Link} from "@nextui-org/react";
import React from "react";

async function fetchData() {
    const data = await fetch("https://store.istad.co/api/products",{
        method: "GET",
        cache: "no-store"
    });
    const res = await data.json();
    return res.results;
}

export default async function Home() {
    const product = await fetchData();
    return (
        <>
            <HeroSectionComponent/>
            <div className="container mx-auto">
                <h1 className="text-center text-2xl font-bold my-10">Our Products</h1>
                <div className="gap-5 grid grid-cols-1 md:grid-cols-2 px-2 md:px-5 lg:grid-cols-4">
                    {product.map((product: productType) => {
                            return (
                                <Link href={`/${product.id}`} key={product.id}>
                                    <CardProductComponent
                                        name={product.name}
                                        price={product.price}
                                        image={product.image}
                                    />
                                </Link>
                            )
                        })}
                </div>
            </div>
        </>
    )
}
