import {Button, Link} from "@nextui-org/react";
export default function HeroSectionComponent(){
    return (
        <section className="bg-hero-section">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Welcome to Among-Ecommerce
                </h1>
                <p className="mb-8 text-md font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Here, we blend quality with passion to bring you an unparalleled shopping experience.
                    Dive into our curated collection of clothes designed to cater to your every need and desire.
                    Discover, indulge, and let your journey of exceptional finds begin here. Happy Shopping!
                </p>
                <Button className="bg-violet-800" variant="flat">
                    <Link href="/best-seller" className=" text-white">Go Best Seller</Link>
                </Button>
            </div>
        </section>
    )
}