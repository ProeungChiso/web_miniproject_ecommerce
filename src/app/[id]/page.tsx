import React from "react";
import CardProductDetailComponent from "@/components/SiteComponents/Card/CardProductDetailComponent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Product Detail",
    description: "Among-Ecommerce Website",
    keywords: ["shop", "ecommerce", "sell"],
    openGraph: {
        title: "Product Detail",
        description: "Among-Ecommerce Website",
        images: [
            "https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-online-shop-smartphone_23-2151201769.jpg?t=st=1711445270~exp=1711448870~hmac=a9bdd24fb0e0c9bf61350249a48a4fba5bdac187bf6c2bba8f38a9f481ccf612&w=1480",
        ],
    },
};

async function fetchData(id: number) {
    const data = await fetch(`https://store.istad.co/api/products/${id}`,
        {
            method: "GET",
            cache: "no-store"
        });
    return data.json();
}

export type ParamProps = {
    params: {
        id: number
    }
}

export default async function ProductDetail({params}: ParamProps) {
    const id = params.id;
    const prodDetail = await fetchData(id);
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-xl md:text-2xl text-center font-bold mb-2">Product Detail</h1>
            <div className="container mx-auto">
                <CardProductDetailComponent image={prodDetail.image}
                                            name={prodDetail.name}
                                            desc={prodDetail.desc}
                                            price={prodDetail.price}
                                            seller={prodDetail.seller}
                />
            </div>
        </div>
    )
}