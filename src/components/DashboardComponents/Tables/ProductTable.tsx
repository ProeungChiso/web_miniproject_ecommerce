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
                            <DropdownItem key="edit">Edit</DropdownItem>
                            <DropdownItem
                                key="delete"
                                className="text-danger"
                                color="danger"
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

export default function ProductTable() {
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