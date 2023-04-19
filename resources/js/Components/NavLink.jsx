import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";

export default function NavLink({ href, className, processing, onClick, children, ...props }) {
    return (
        <Link
            onClick={onClick}
            href={href}
            {...props}
            className={clsx(
                className,
                processing && 'opacity-25', 
                usePage.url == href && "font-semibold text-black",
                "text-gray-600 hover:text-black py-3"
            )}
            disabled={processing}
        >
            {children}
        </Link>
    );
}
