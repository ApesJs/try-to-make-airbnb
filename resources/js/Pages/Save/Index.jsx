import Container2 from "@/Components/Container2";
import App from "@/Layouts/App";
import { numberFormat } from "@/Libs/helper";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index({saves}){
    // console.log(saves)
    return(
        <div>
            <Container2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {saves.length ? saves.map(save => (
                        <div key={save.id}>
                            <Link href={`/saves/${save.slug}`}>
                                <img className="rounded-2xl" src="../../assets/img/product/slide1.jpg" alt="" />
                            </Link>
                            <Link className="text-sm line-clamp-1 mt-2" href={`/saves/${save.slug}`}>
                                {save.accommodation.name} <br />
                            </Link>
                            <Link className="text-sm" href={`/saves/${save.slug}`}>
                                {save.accommodation.location}, <b>{save.accommodation.country}</b> <br />
                            </Link>
                            {/* sintak ketika category di klik dia akan show semua data category berdasarkan request */}
                            <Link href=''>
                                {save.category.name} <br />
                            </Link>
                            <Link>
                                <b>Rp {numberFormat(save.accommodation.price)}</b> / Malam <br />
                            </Link>
                            {/* {accommodation.sub_category.name} */}
                        </div>
                    )) : 'DATANYA GE GA ADA BROW'}
                </div>
            </Container2>
        </div>
    )
}

Index.layout = page => <App children={page}/>