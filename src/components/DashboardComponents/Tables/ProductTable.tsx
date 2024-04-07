"use client"
import {useEffect, useState} from "react";
import DataTable, {TableColumn} from "react-data-table-component"
import {productDetailType} from "@/types/productDetail";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import {IoEllipsisHorizontal} from "react-icons/io5";
import {useRouter} from "next/navigation";


export default function ProductTable() {
    const router = useRouter();
    const url = "https://store.istad.co/api/products";
    const [getProduct, setProduct] = useState([]);

    const fetchProduct = async () => {
        const res = await fetch(url);
        const result = await res.json();
        setProduct(result.results);
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    const paginationComponent = {
        rowsPerPageText: "Rows per page",
        rangeSeparatorText: "of",
        selectAllRowsItem: true,
        selectAllRowsItemText: "All rows",
    };
    const columns: TableColumn<productDetailType>[] = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Price",
            selector: (row) => row.price,
            sortable: true
        },
        {
            name: 'Quantity',
            selector: (row) => row.quantity,
            sortable: true
        },
        {
            name: 'Category',
            selector: (row): any => row.category,
            sortable: true
        },
        {
            name: 'Image',
            selector: (row): any =>
                <div className="w-[50px] h-[50px] overflow-hidden rounded">
                    <img src={row.image} width={50} height={50} className="object-cover"/>
                </div>,
        },
        {
            name: "Action",
            cell: (row) => {
                return (
                    <div>
                        <Dropdown>
                            <DropdownTrigger>
                                <button>
                                    <IoEllipsisHorizontal/>
                                </button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem
                                    key={row.id}
                                    onClick={() => router.push("/dashboard/edit-product")}
                                >
                                    Edit
                                </DropdownItem>
                                <DropdownItem
                                    key={row.id}
                                    className="text-danger"
                                    color="danger"
                                    onClick={()=> row.id && deleteProductById(row.id)}
                                >
                                    Delete
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            }
        },
    ]
    const deleteProductById = async (productId: number) => {
        try {
            const response = await fetch(`https://store.istad.co/api/products/${productId}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NTg2MDYxLCJpYXQiOjE3MTI0MjYwNjEsImp0aSI6ImMxN2FlNzI3MTIzNTQzNTg4ZWEyNGYwN2YyMDAwZjczIiwidXNlcl9pZCI6Mjd9.CyCHmn8MgZ92In7C9SN0VVtnPoR0Nuqjs1aPNOVtc5Q',
                    'Cookie': 'csrftoken=NXPUhmb8kZ0cCfSZpgcTVBpCtJS0z8tQ0kKMjikCnktNPzJMMlhEhWoya1sTlQ8G; sessionid=j2ehodtby6m8hxtqutgkslon20zzww7t',
                },
            });
            const data = await response.json();
        } catch (error) {
        }
    };
    return (
        <>
            <DataTable
                fixedHeader={true}
                pagination
                columns={columns}
                paginationComponentOptions={paginationComponent}
                data={getProduct}
            />
        </>
    )
}
