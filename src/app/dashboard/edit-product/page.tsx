import React from "react";
import EditProductByIdForm from "@/components/DashboardComponents/Form/EditProductByIdForm";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: "Edit Product",
    description: "Among-Ecommerce Dashboard Website",
    keywords: ["shop", "ecommerce", "sell"],
    openGraph: {
        title: "Edit Product",
        description: "Among-Ecommerce Dashboard Website",
        images: [
            "https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-online-shop-smartphone_23-2151201769.jpg?t=st=1711445270~exp=1711448870~hmac=a9bdd24fb0e0c9bf61350249a48a4fba5bdac187bf6c2bba8f38a9f481ccf612&w=1480",
        ],
    },
};
export default function page() {
    return (
        <div className="w-full px-4 md:px-10">
            <h1 className="font-bold text-md md:text-2xl mt-4 mb-4 md:mb-8 text-center"><span
                className="text-violet-800">Among-Ecommerce </span>Edit Products
            </h1>
            <EditProductByIdForm/>

        </div>
    )
}