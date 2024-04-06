import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Best Seller",
    description: "Among-Ecommerce Website",
    keywords: ["shop", "ecommerce", "sell"],
    openGraph: {
        title: "Best Seller",
        description: "Among-Ecommerce Website",
        images: [
            "https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-online-shop-smartphone_23-2151201769.jpg?t=st=1711445270~exp=1711448870~hmac=a9bdd24fb0e0c9bf61350249a48a4fba5bdac187bf6c2bba8f38a9f481ccf612&w=1480",
        ],
    },
};
export default function BestSeller(){
    return(
        <>
            <section id="bestSellerContent">
                <div className="container mx-auto mt-10">
                    <h1 className="text-xl md:text-2xl text-center font-bold mb-2">Best Seller</h1>
                </div>
            </section>
        </>
    )
}