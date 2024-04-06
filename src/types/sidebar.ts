import { HiOutlineDocumentAdd, HiChartPie, HiCog, HiGlobeAlt } from 'react-icons/hi';

export const sideBarItem = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: HiChartPie
    },
    {
        title: "Create Product",
        path: "/dashboard/create-product",
        icon: HiOutlineDocumentAdd

    },
    {
        title: "Setting",
        path: "/dashboard",
        icon: HiCog
    },
    {
        title: "Back to Homepage",
        path: "/",
        icon: HiGlobeAlt
    },
]