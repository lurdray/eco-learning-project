"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({children, href}:{children:any, href:any}) {
    const path = usePathname()
    return (
        <Link href={href}>
        <div className={`flex items-center space-x-3 p-2 px-3 hover:bg-gray-100 ${path == href ? "bg-gray-100" : ""} rounded-md text-sm`}>
            {children}
        </div>
        </Link>
    )
}