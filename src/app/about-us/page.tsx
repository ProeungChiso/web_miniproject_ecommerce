import React from "react";
import {Image} from "@nextui-org/react";
export default function AboutUs(){
    return(
        <>
            <section id="aboutContent">
                <div className="container mx-auto">
                    <section id="aboutGreetingHead" className="mt-10">
                        <h1 className="text-xl md:text-2xl text-center font-bold mb-2">Welcome to Among-Ecommerce</h1>
                        <h5 className="text-gray-600 text-center">Where Fashion Meets Functionality</h5>
                    </section>
                    <section id="aboutGreetingBody" className="px-5 md:px-10 lg:px-20">
                        <div className="flex justify-center items-center my-5">
                            <Image
                                src="/images/among_logo.png"
                                alt="among long"
                                width="200"
                                height="200"
                            />
                        </div>
                        <p className="text-wrap text-sm md:text-xl text-justify text-gray-600">
                            <span className="text-violet-800 font-bold">Among-Ecommerce </span>
                            was born out of a passion for bringing style and
                            practicality together. Founded in 2023, our journey began with a simple yet powerful belief:
                            everyone deserves to wear clothes that not only look fabulous but feel comfortable and are
                            made to last.
                        </p>
                        <h5 className="text-xl md:text-2xl font-bold mt-10 mb-2">- Our Mission</h5>
                        <p className="text-wrap text-sm md:text-xl text-justify text-gray-600">
                            At
                            <span className="text-violet-800 font-bold"> Among-Ecommerce </span>
                            our mission is to empower individuals through fashion. We believe that your wardrobe should
                            reflect your unique personality and fit your lifestyle, without ever compromising on comfort
                            or quality. From the drawing board to the final stitch, every piece of clothing we offer is
                            designed with you in mind.
                        </p>
                        <h5 className="text-xl md:text-2xl font-bold mt-10 mb-2">- Our Collection</h5>
                        <p className="text-wrap text-sm md:text-xl text-justify text-gray-600 mb-5">
                            We specialize in a wide range of clothing that caters to all occasions, seasons, and moods.
                            Whether you are searching for the perfect outfit for a day at the office, a casual weekend
                            getaway, or a special evening out, our meticulously curated collections have something for
                            everyone. Our offerings include:
                        </p>
                        <ul className="list-disc px-5 text-gray-500">
                            <li>For Women: From elegant dresses and blouses to comfortable leggings and cardigans, our
                                women collection is designed to make you look and feel your best, every day.
                            </li>
                            <li>For Men: Discover our selection of shirts, trousers, jackets, and more that combine
                                classic style with modern comfort.
                            </li>
                            <li>Unisex and Accessories: Complete your look with our range of accessories and unisex
                                items that add the perfect finishing touch to any outfit.
                            </li>
                        </ul>
                        <h5 className="text-xl md:text-2xl font-bold mt-10 mb-2">
                            - Sustainability at Our Core
                        </h5>
                        <p className="text-wrap text-sm md:text-xl text-justify text-gray-600 mb-5">
                            We are not just about looking good.<span className="text-violet-800 font-bold"> Among-Ecommerce </span>is committed to sustainability and ethical practices. We carefully select eco-friendly materials and work closely with manufacturers who share our values of respect for people and the planet.
                        </p>

                    </section>
                </div>
            </section>
        </>
    )
}