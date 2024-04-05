import React from "react";
import {Button, Card, CardBody, CardFooter, Image, Link} from "@nextui-org/react";

export default function CardProductComponent({name, image, price}: productType) {
    return (
        <Card shadow="sm" className="w-full mx-5 lg:mx-0">
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={name}
                    className="w-full object-cover h-[140px]"
                    src={image}
                />
            </CardBody>
            <CardFooter className="text-small flex-col items-start">
                <b>{name}</b>
                <p className="text-default-500 mb-2">{price} $</p>
                <button className="bg-violet-800 p-2 rounded-lg text-gray-50">
                    Add to cart
                </button>
            </CardFooter>
        </Card>
    );
}
