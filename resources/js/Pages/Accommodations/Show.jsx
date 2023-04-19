import Avatar from "@/Components/Avatar";
import Container2 from "@/Components/Container2";
import DangerButton from "@/Components/DangerButton";
import NavLink from "@/Components/NavLink";
import NavLink2 from "@/Components/NavLink2";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import React from "react";
import { toast } from "react-hot-toast";
import Button from "@/Components/Button";
import { numberFormat } from "@/Libs/helper";
import DatePickerWrapper from "@/Components/DatePickerWrapper";

export default function Show({ accommodation }) {
    console.log(accommodation);
    const addToCart = () => {
        Inertia.post(
            route("cart.store", accommodation),
            {},
            {
                onFinish: () => toast.success("Pesanan anda di keranjang!"),
            }
        );
    };
    const addToSave = () => {
        Inertia.post(
            route("save.store", accommodation),
            {},
            {
                onFinish: () => toast.success("Berhasil masuk wishlist!"),
            }
        );
    };
    const kirikanan = {
        float: "right",
    };
    return (
        <Container2 className="mx-40">
            <div>
                <Head title="Detail Akomodasi" />
                <div className="text-2xl">{accommodation.name}</div>
                <div style={kirikanan}>
                    <NavLink2 className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                            />
                        </svg>
                        &nbsp;&nbsp;<u>Share</u>
                    </NavLink2>
                    <NavLink2 onClick={addToSave} className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                        &nbsp;&nbsp;<u>Save</u>
                    </NavLink2>
                </div>
                <div>
                    (Jumlah Review) . {accommodation.category.name} .{" "}
                    {accommodation.tier.name} .{" "}
                    <u>{accommodation.village.village}</u> .{" "}
                    <u>{accommodation.subdistrict.subdistrict}</u> .{" "}
                    <u>{accommodation.city.city}</u> .{" "}
                    <u>{accommodation.country.country}</u> <br />
                </div>
                <div className="flex mt-8 gap-3">
                    <div className="w-1/2 h-auto">
                        <img
                            className="rounded-2xl w-full h-full"
                            src="../../assets/img/product/slide1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="w-1/4">
                        <img
                            className="w-full rounded-2xl"
                            src="../../assets/img/product/slide1.jpg"
                            alt=""
                        />
                        <img
                            className="w-full rounded-2xl mt-3"
                            src="../../assets/img/product/slide1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="w-1/4">
                        <img
                            className="w-full rounded-2xl"
                            src="../../assets/img/product/slide1.jpg"
                            alt=""
                        />
                        <img
                            className="w-full rounded-2xl mt-3"
                            src="../../assets/img/product/slide1.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <NavLink2 className="">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg> */}
                        &nbsp;&nbsp;<u>Lihat Semua Gambar</u>
                    </NavLink2>
                </div>
                <div className="flex mt-10 w-1/1">
                    <div className="relative w-2/3">
                        <div className="">
                            <div className="text-2xl ml-20">
                                {accommodation.user.name} adalah Host 
                            </div>
                            <div className="text-sm mb-10 ml-20 text-gray-500">
                                Kapasitas {accommodation.capacity} Orang .{" "}
                                {accommodation.bed} Kamar Tidur .{" "}
                                {accommodation.bath} Kamar Mandi
                            </div>
                        </div>
                        <div className="absolute left-0 top-0">
                            <Avatar></Avatar>
                        </div>
                        <hr />
                        <div className="mt-10">
                            <div className="flex inline-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                                    />
                                </svg>
                                <div className="flex inline-flex ml-5">
                                    Designed By <br />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm ml-11">
                            (Nama Designer)
                        </div>
                        <div className="mt-5">
                            <div className="flex inline-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                                    />
                                </svg>
                                <div className="flex inline-flex ml-5">
                                    Ruang kerja khusus <br />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm ml-11">
                            Ruangan private dengan wifi yang cocok untuk
                            bekerja.
                        </div>
                        <div className="mt-5">
                            <div className="flex inline-flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                    />
                                </svg>
                                <div className="flex inline-flex ml-5">
                                    Pembatalan gratis selama 48 jam.
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm ml-11 mb-10">
                            {/* (Nama Designer) */}
                        </div>
                        <hr />
                        <div className="text-3xl mt-10">
                            <b className="text-orange-400">Smilpy</b>
                            <b>Cover</b>
                        </div>
                        <div className="mt-5 mb-10">
                            Setiap pemesanan mencakup perlindungan gratis dari
                            pembatalan Tuan Rumah, ketidakakuratan daftar, dan
                            masalah lain seperti kesulitan check-in. <br />
                            <br />
                            <p>
                                <u>
                                    <b>Pelajari Selengkapnya</b>
                                </u>
                            </p>
                        </div>
                        <hr />
                        <div className="mt-10 mb-10">
                            {accommodation.description}
                            <p className="mt-3">
                                <u>
                                    <b>Selengkapnya</b>
                                </u>
                            </p>
                        </div>
                        <hr />
                        <div className="mt-10 mb-10">
                            <p className="text-2xl">Fasilitas</p> <br />
                            {accommodation.facilities.length ? (
                                <div>
                                    {accommodation.facilities.map((dataF) => (
                                        <div key={dataF.slug} className='mb-3'>- {dataF.name}</div>
                                    ))}
                                </div>
                            ) : (
                                "Data Akomodasi Tidak Ada"
                            )}
                            <b>
                                {" "}
                                <u>Lihat Semua Fasilitas</u>
                            </b>
                        </div>
                        <hr />
                        <div className="mt-10">
                            <p className="text-xl mb-2">
                                Tentukan Tanggal Cek In & Cek Out
                            </p>
                            <DatePickerWrapper></DatePickerWrapper>
                        </div>
                    </div>
                    <div className="relative w-1/3">
                        <div className="ml-4 shadow-xl border-2 border-gray-200 w-96 rounded-xl h-96 sticky top-0 right-0">
                            <div className="ml-5">
                                <br />
                                <div className="text-2xl">
                                    <b>
                                        <sup>Rp</sup>
                                        {numberFormat(accommodation.price)} /
                                        Malam
                                    </b>
                                </div>
                            </div>
                            <NavLink
                                onClick={addToCart}
                                className="inline-flex justify-center items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-sm text-white active:bg-gray-900 transition ease-in-out duration-150 text-center bg-orange-600 absolute inset-x-9 bottom-3 w-4/5 text-lg"
                            >
                                Pesan Sekarang
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className=" mt-10">
                    <hr />
                </div>
                <div className="mt-10">
                    (jumlah reviews){" "}
                    <p className="text-2xl">
                        <b>Reviews</b>
                    </p>{" "}
                    <br />
                    <b>
                        <u>Lihat Semua Review</u>
                    </b>
                </div>
                <div className=" mt-10">
                    <hr />
                </div>
                <div className="flex mt-10 items-center">
                    <Avatar />
                    <div className="ml-5">
                        Dilayani Oleh {accommodation.user.name}
                        <div className="text-sm text-gray-500">
                            Bergabung Sejak {accommodation.user.created_at}
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                    </svg>
                    <div className="ml-2 mr-5">(Jumlah Ulasan) Ulasan</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                    </svg>
                    Identitas Terveifikasi
                </div>
                <div className="mt-5 hover:bg-gray-200 h-14 rounded-lg w-52 border-solid border-2 border-black">
                    <div className="text-center mt-3">Hubungi Tuan Rumah</div>
                </div>
                <div className="flex mt-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="pink"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 mt-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <div className="ml-3 mt-3 text-xs text-gray-500">
                        <p>Untuk melindungi pembayaran Anda,</p>{" "}
                        <p>jangan pernah mengirimkan uang atau berkomunikasi</p>{" "}
                        <p>di luar situs web atau app Smilpy.</p>
                    </div>
                </div>
                <div className="mt-10">
                    <hr />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">Hal yang perlu diketahui</p>
                    <br />
                    <br />
                    <br />
                    Section ini di isi oleh peraaturan tuan rumah
                </div>
                <div className="mt-32 bg-gray-300 h-96 w-1/1 rounded-xl">
                    <div className=""></div>
                </div>
            </div>
        </Container2>
    );
}

Show.layout = (page) => <App children={page} />;
