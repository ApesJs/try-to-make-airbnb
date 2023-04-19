import React from 'react'
import { usePage } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import Container2 from '@/Components/Container2';
import Searchbar from '@/Components/Searchbar';

export default function Navbar(){
    const {auth, carts_global_count, saves_global_count} = usePage().props;
    // console.log(auth)
    return(
        <>
            <nav className='bg-white border-b py-2'>
                <Container2>
                    <div className="flex items-center justify-between">
                        <NavLink href='/'>
                            <ApplicationLogo className='inline-block'>&nbsp;&nbsp;<b>SMILPY</b></ApplicationLogo>
                        </NavLink>
                        <Searchbar></Searchbar>
                        <div className="flex items-center gap-x-6">
                            {auth.user ? (
                                <>
                                    <NavLink href='/accommodations'>Mode Tuan Rumah</NavLink>
                                    <NavLink className='flex items-center' href='/carts'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                        <div>
                                            <sup>{carts_global_count > 0 ? carts_global_count : null}</sup>
                                        </div>
                                    </NavLink>
                                    <NavLink className='flex items-center' href='/saves'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <div>
                                            <sup>{saves_global_count > 0 ? saves_global_count : null}</sup>
                                        </div>
                                    </NavLink>
                                    <DropdownMenu>
                                        <DropdownMenu.Item href='/login'><b>Pesan</b></DropdownMenu.Item>
                                        <DropdownMenu.Item href='/'>Perjalanan</DropdownMenu.Item>
                                        <DropdownMenu.Item href='/'>Save</DropdownMenu.Item>
                                        <hr />
                                        <DropdownMenu.Item href='/'>Mode Tuan Rumah</DropdownMenu.Item>
                                        <DropdownMenu.Item href='/'>Adakan Pengalaman</DropdownMenu.Item>
                                        <DropdownMenu.Item href='/'>Rekomendasikan Tuan Rumah</DropdownMenu.Item>
                                        <DropdownMenu.Item href='/'>Akun</DropdownMenu.Item>
                                        <hr />
                                        <DropdownMenu.Item href='/'>Bantuan</DropdownMenu.Item>
                                        <DropdownMenu.Item href='/logout' method='post'>Keluar</DropdownMenu.Item>
                                    </DropdownMenu>
                                </>
                            ) : (
                                <>
                                    <NavLink href='/'>Jadikan Rumah Anda Partner Smilpy</NavLink>
                                    <DropdownMenu>
                                        <DropdownMenu.Item href='/login'><b>Masuk</b></DropdownMenu.Item>
                                        <DropdownMenu.Item href='/register'>Daftar</DropdownMenu.Item>
                                        <hr />
                                        <DropdownMenu.Item href='/'>Jadikan Rumah Anda Partner Smilpy</DropdownMenu.Item>
                                        <DropdownMenu.Item href='/'>Adakan Pengalaman</DropdownMenu.Item>
                                        <DropdownMenu.Item href='/'>Bantuan</DropdownMenu.Item>
                                    </DropdownMenu>
                                </>
                            )}
                        </div>
                    </div>
                </Container2>
            </nav>
        </>
    )
}