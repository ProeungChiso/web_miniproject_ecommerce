import CreateProductForm from "@/components/DashboardComponents/Form/CreateProductForm";
import React from "react";
export default function page() {
    return (
        <div className="w-full px-4 md:px-10">
            <h1 className="font-bold text-md md:text-2xl mt-4 mb-4 md:mb-8 text-center"><span
                className="text-violet-800">Among-Ecommerce </span>Create Products</h1>
            <CreateProductForm/>
        </div>
)
}