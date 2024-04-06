"use client";
import {Formik, Form, Field, ErrorMessage} from "formik";
import React, {useState} from "react";
import * as Yup from "yup";
import Image from "next/image";
import axios from "axios";

const FILE_SIZE = 1024 * 1024 * 5;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif", "image/webp"];

const validationSchema = Yup.object().shape({
    image: Yup.mixed()
        .test("fileSize", "File too large", (value: any) => {
            if (!value) {
                return true;
            }
            return value.size <= FILE_SIZE;
        })
        .test("fileFormat", "Unsupported Format", (value: any) => {
            if (!value) {
                return true;
            }
            return SUPPORTED_FORMATS.includes(value.type);
        })
        .required("Required"),
});

const fieldStyle = "border border-gray-300 rounded-md";

const CreateProductForm = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
        "Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NTg2MDYxLCJpYXQiOjE3MTI0MjYwNjEsImp0aSI6ImMxN2FlNzI3MTIzNTQzNTg4ZWEyNGYwN2YyMDAwZjczIiwidXNlcl9pZCI6Mjd9.CyCHmn8MgZ92In7C9SN0VVtnPoR0Nuqjs1aPNOVtc5Q"
    );
    myHeaders.append(
        "Cookie",
        "csrftoken=NXPUhmb8kZ0cCfSZpgcTVBpCtJS0z8tQ0kKMjikCnktNPzJMMlhEhWoya1sTlQ8G; sessionid=j2ehodtby6m8hxtqutgkslon20zzww7t"
    );

    const handleSubmitToServer = async (values: any) => {
        try {
            const response = await axios.post(
                "https://store.istad.co/api/file/product/",
                values.image
            );
            return response.data.image;
        } catch (error) {
            console.log(error);
        }
    };

    const handleCreateProduct = async (values: any, imageData: any) => {
        try {
            const imageUrl = await handleSubmitToServer(imageData);
            const postData = await fetch("https://store.istad.co/api/products/", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({
                    ...values,
                    image: imageUrl,
                }),
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-full pt-9">
            <Formik
                onSubmit={(values: any, {setSubmitting, resetForm}) => {
                    const formData = new FormData();
                    formData.append("image", values.image);
                    handleCreateProduct(values, {image: formData});
                    setSubmitting(false);
                    resetForm();
                }}
                validationSchema={validationSchema}
                initialValues={{
                    category: {
                        name: "Hiking shoes",
                        icon: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1693342954-rincon-3-64ee5ca62e001.jpg?crop=1xw:1xh;center,top&resize=980:*",
                    },
                    name: "",
                    desc: "",
                    image: undefined,
                    price: 0,
                    quantity: 0,
                }}
            >
                {({isSubmitting, setFieldValue}) => (
                    <Form className="flex m-[30px] flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Product Name: </label>
                            <Field
                                placeholder="T-shirt"
                                className={fieldStyle}
                                name="name"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="desc">Description: </label>
                            <Field
                                placeholder="This is a t-shirt"
                                className={fieldStyle}
                                name="desc"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="price">Price: </label>
                            <Field
                                placeholder="100"
                                className={fieldStyle}
                                name="price"
                                type="number"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="price">Quantity: </label>
                            <Field
                                placeholder="1"
                                className={fieldStyle}
                                name="quantity"
                                type="number"
                            />
                            <div>
                                <Field
                                    name="image"
                                    className={fieldStyle}
                                    type="file"
                                    title="Select a file"
                                    setFieldValue={setFieldValue}
                                    component={CustomInput}
                                />
                                <ErrorMessage name="image">
                                    {(msg) => <div className="text-danger">{msg}</div>}
                                </ErrorMessage>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-violet-800 text-white rounded-md"
                                disabled={isSubmitting}
                            >
                                Create
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateProductForm;

function CustomInput({field, form, setFieldValue, ...props}: any) {
    const [previewImage, setPreviewImage] = useState<string | undefined>(
        undefined
    );
    const name = field.name;
    const onChange: any = (event: any) => {
        const file = event.currentTarget.files[0];
        setFieldValue(name, file);
        setPreviewImage(URL.createObjectURL(file));
    };

    return (
        <div className="flex flex-col gap-4 justify-center">
            <input
                type="file"
                onChange={onChange}
                {...props}
                className="border border-gray-300 rounded-md"
            />
            {previewImage && (
                <Image
                    className="rounded-md"
                    src={previewImage}
                    alt="preview Image"
                    width={100}
                    height={100}
                />
            )}
        </div>
    );
}