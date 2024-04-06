import React from "react";
import ProductTable from "@/components/DashboardComponents/Tables/ProductTable";

const Dashboard = () => {
    return (
        <div className="w-full px-4 md:px-10">
            <h1 className="font-bold text-md md:text-2xl mt-4 mb-4 md:mb-8 text-center"><span className="text-violet-800">Among-Ecommerce </span>Data Products</h1>
            <ProductTable/>
        </div>
    );
};

export default Dashboard;