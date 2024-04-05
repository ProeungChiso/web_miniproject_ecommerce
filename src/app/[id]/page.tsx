import React from "react";
import CardProductDetailComponent from "@/components/SiteComponents/Card/CardProductDetailComponent";

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