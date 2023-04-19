import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";

export default function NavLink2({ href, className, processing, onClick, children, ...props }) {
    return (
        <Link
            onClick={onClick}
            href={href}
            {...props}
            className={clsx(className, usePage.url == href, `inline-flex items-center px-4 py-2 bg-white border border-transparent rounded-md font-semibold text-xs text-black uppercase tracking-widest hover:bg-gray-200 focus:outline-none focus:ring-2  focus:ring-offset-2 transition ease-in-out duration-150 ${processing && 'opacity-25'} `)}
            disabled={processing}
        >
            {children}
        </Link>
    );
}
