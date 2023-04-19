import React from 'react'
import { usePage } from '@inertiajs/react';
import Container from '@/Components/Container';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import DropdownMenu2 from '@/Components/DropdownMenu';
import Container2 from '@/Components/Container2';
import Searchbar from '@/Components/Searchbar';

export default function Navbar2(){
    const {auth, carts_global_count, saves_global_count} = usePage().props;
    return(
        <>
            <nav className='bg-white border-b py-2'>
                <Container2>
                    <div className="flex items-center justify-between">
                        <NavLink href='/'>
                            <ApplicationLogo className='inline-block'>&nbsp;&nbsp;<b>SMILPY</b></ApplicationLogo>
                        </NavLink>
                        <div className="flex items-center gap-x-6">
                            {auth.user ? (
                                <>
                                    <NavLink href='/accommodations'>Beranda</NavLink>
                                    <NavLink>Kotak masuk</NavLink>
                                    <NavLink>Kalender</NavLink>
                                    <NavLink>Informasi</NavLink>
                                    <NavLink>Menu</NavLink>
                                    <DropdownMenu2>
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
                                    </DropdownMenu2>
                                </>
                            ) : (
                                <>
                                    <NavLink href='/'>Jadikan Rumah Anda Partner Smilpy</NavLink>
                                    <DropdownMenu2>
                                        <DropdownMenu.Item href='/login'><b>Masuk</b></DropdownMenu.Item>
                                        <DropdownMenu.Item href='/register'>Daftar</DropdownMenu.Item>
                                        <hr />
                                        <DropdownMenu.Item href='/'>Jadikan Rumah Anda Partner Smilpy</DropdownMenu.Item>
                                        <DropdownMenu.Item href='/'>Adakan Pengalaman</DropdownMenu.Item>
                                        <DropdownMenu.Item href='/'>Bantuan</DropdownMenu.Item>
                                    </DropdownMenu2>
                                </>
                            )}
                        </div>
                    </div>
                </Container2>
            </nav>
        </>
    )
}