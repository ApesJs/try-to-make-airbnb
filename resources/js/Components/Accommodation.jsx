import { numberFormat } from "@/Libs/helper";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Accommodation({ accommodation }) {
    console.log(accommodation);
    return (
        <>
            <div className="">
                <div className="w-1/1 h-80 rounded-xl">
                    <Link
                        href={route("accommodations.show", accommodation.slug)}
                    >
                        {/* {accommodation.photo ? (
                            <img
                                className="h-full w-full object-cover rounded-xl"
                                src={`${window.location.origin}/storage/${accommodation.photo}`}
                                alt=""
                            />
                        ) : (
                            "gambarnya kaga ada bang"
                        )} */}
                    </Link>
                </div>
                <div className="w-1/1 h-1/3 mt-3">
                    <p>
                        <Link
                            className="text-sm line-clamp-1"
                            href={route(
                                "accommodations.show",
                                accommodation.slug
                            )}
                        >
                            {accommodation.name}
                        </Link>
                    </p>
                    <p>
                        <Link
                            className="text-sm"
                            href={route(
                                "accommodations.show",
                                accommodation.slug
                            )}
                        >
                            <b>{accommodation.city.city}</b>,{" "}
                            <b>{accommodation.country.country}</b>
                        </Link>
                    </p>
                    <p>
                        <Link
                            className="text-sm"
                            href={route(
                                "accommodations.show",
                                accommodation.slug
                            )}
                        >
                            {accommodation.category.name}
                        </Link>
                    </p>
                    <p>
                        <Link
                            href={route(
                                "accommodations.show",
                                accommodation.slug
                            )}
                        >
                            <b>Rp {numberFormat(accommodation.price)}</b> /
                            Malam{" "}
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
