import { Menu } from '@headlessui/react'
import { Link } from '@inertiajs/react'
import clsx from 'clsx'

function Item({href, children, ...props}){
    return(
        <Menu.Item>
            {({ active }) => (
                
                <Link
                    {...props}
                    className={clsx(active && 'bg-gray-100 text-black', 'block w-full text-left text-gray-600 py-1 px-3 text-sm mt-3 mb-3 ms-2')}
                    href={href}
                >
                    {children}
                </Link>
            )}
        </Menu.Item>
    )
}

function DropdownMenu({label, children}) {
    return (
        <Menu className='relative' as='div'>
            {({open}) => (
                <>
                    <Menu.Button className='inline-flex w-full justify-center rounded-3xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg hover:bg-gray-50'>
                        {label}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Menu.Button>
                    <Menu.Items className='bg-white rounded-xl border absolute w-64 top-full mt-1 right-0 overflow-hidden'>
                        {children}
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}

DropdownMenu.Item = Item
export default DropdownMenu;