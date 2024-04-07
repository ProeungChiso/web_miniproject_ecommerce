import RegisterForm from "@/components/SiteComponents/Form/RegisterForm";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: "Register",
    description: "Among-Ecommerce Website",
    keywords: ["shop", "ecommerce", "sell"],
    openGraph: {
        title: "Register",
        description: "Among-Ecommerce Website",
        images: [
            "https://img.freepik.com/free-photo/photocomposition-horizontal-shopping-banner-with-online-shop-smartphone_23-2151201769.jpg?t=st=1711445270~exp=1711448870~hmac=a9bdd24fb0e0c9bf61350249a48a4fba5bdac187bf6c2bba8f38a9f481ccf612&w=1480",
        ],
    },
};
export default function Register() {
    return (
        <div className='flex h-screen justify-center items-center'>
            <RegisterForm/>
        </div>
    )
}