import Accommodation from "@/Components/Accommodation";
import Container2 from "@/Components/Container2";
import Pagination from "@/Components/Pagination";
import App from "@/Layouts/App";
import { Head, Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Show({sub_categories, ...props}) {
    const { data: accommodations, meta, links } = props.accommodations;
    // console.log(sub_categories);
    return (
        <div>
            <Head title="Smilpy" />
            <Container2>
                Akomodasi dengan kategori {sub_categories.name}
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
                <Pagination meta={meta} links={links} />
            </Container2>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
