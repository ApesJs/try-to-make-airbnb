import Accommodation from "@/Components/Accommodation";
import Container2 from "@/Components/Container2";
import Pagination from "@/Components/Pagination";
import App from "@/Layouts/App";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Home(props, { sub_categories }) {
    const { data: accommodations, meta, links } = props.accommodations;
    // console.log(accommodations.photo);
    return (
        <div className="">
            <Head title="Smilpy" />
            <Container2>
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
                    "Data Akomodasi Tidak Ada"
                )}
            </Container2>
            <Pagination meta={meta} links={links} />
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
