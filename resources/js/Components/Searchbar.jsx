import { Menu } from "@headlessui/react";
import React from "react";

export default function Searchbar({children}){
    return(
        <Menu className='relative' as='div'>
            {({open}) => (
                <>
                    <Menu.Button className='inline-flex w-full justify-center rounded-3xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg hover:bg-gray-50'>
                        <div className="mt-2">
                            &nbsp;&nbsp;&nbsp; Ke mana saja &nbsp;&nbsp;&nbsp; | 
                            &nbsp;&nbsp;&nbsp; Minggu mana pun &nbsp;&nbsp;&nbsp; | 
                            &nbsp;&nbsp;&nbsp; Tambahkan tamu &nbsp;&nbsp;&nbsp;
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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