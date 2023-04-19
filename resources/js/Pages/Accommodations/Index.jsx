import Accommodation from "@/Components/Accommodation";
import Container2 from "@/Components/Container2";
import NavLink2 from "@/Components/NavLink2";
import Pagination from "@/Components/Pagination";
import App2 from "@/Layouts/App2";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Index() {
    const {
        data: accommodations,
        meta,
        links,
    } = usePage().props.accommodations;
    const { auth } = usePage().props;
    // console.log(auth)
    return (
        <div>
            <Container2>
                <div className="relative flex">
                    <div className="text-3xl mb-10">
                        Selamat Datang, {auth.user.name} !
                    </div>
                    <div className="border-2 border-black w-72 h-10 rounded-xl text-center absolute top-0 right-0">
                        <NavLink2
                            href="/accommodations/create"
                            className="mt-0.5 w-full"
                        >
                            <p className="ml-3.5">Tambahkan akomodasi baru</p>
                        </NavLink2>
                    </div>
                </div>
                <div className="mb-10">
                    <hr />
                </div>
                <div className="text-2xl mb-5">
                    Ini adalah akomodasi yang anda miliki
                </div>
                {accommodations.length ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {accommodations.map((accommodation) => (
                            <Accommodation
                                accommodation={accommodation}
                                key={accommodation.id}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="w-72 bg-orange-500 text-center rounded-xl">Anda belum memiliki akomodasi</div>
                )}
                {/* <Pagination meta={meta} links={links}/> */}
            </Container2>
        </div>
    );
}

Index.layout = (page) => <App2 children={page} />;
