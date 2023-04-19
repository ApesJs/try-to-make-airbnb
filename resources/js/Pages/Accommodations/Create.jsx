import Button from "@/Components/Button";
import Container2 from "@/Components/Container2";
import Error from "@/Components/Error";
import Input from "@/Components/Input";
import InputFile from "@/Components/InputFile";
import InputLabel from "@/Components/InputLabel";
import MultipleSelect from "@/Components/MultipleSelect";
import Select from "@/Components/Select";
import Textarea from "@/Components/Textarea";
import App2 from "@/Layouts/App2";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/react";
import React from "react";

export default function Create({
    facilities,
    sub_categories,
    categories,
    countries,
    cities,
    subdistricts,
    villages,
    tiers,
    errors,
}) {
    const { data, setData } = useForm({
        category_id: "",
        country_id: "",
        city_id: "",
        subdistrict_id: "",
        village_id: "",
        tier_id: "",
        name: "",
        description: "",
        capacity: "",
        bath: "",
        bed: "",
        price: "",
        url: "",
        facilities: [],
        sub_categories: [],
        photos: "",
    });
    const onChange = (e) => setData(e.target.name, e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();

        Inertia.post(route("accommodations.store"), {
            ...data,
            category_id: data.category_id.id,
            country_id: data.country_id.id,
            city_id: data.city_id.id,
            subdistrict_id: data.subdistrict_id.id,
            village_id: data.village_id.id,
            tier_id: data.tier_id.id,
            facilities: data.facilities.map((f) => f.id),
            sub_categories: data.sub_categories.map((sc) => sc.id),
        });
    };
    return (
        <div>
            <Container2 className="mx-40">
                <div className="text-2xl flex items-center mb-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                        />
                    </svg>
                    Masukan akomodasi baru anda
                </div>
                <hr />
                <form onSubmit={onSubmit}>
                    <div className="mb-6 mt-10">
                        <InputLabel className="mb-2" value="Select picture" />
                        <InputFile
                            name="photos"
                            id="photos"
                            onChange={(e) => setData("photos", e.target.files)}
                        />
                        {errors.photo ? <Error value={errors.photo} /> : null}
                    </div>
                    <div className="grid grid-cols-12 gap-6 mg-6">
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">
                                    Category
                                </InputLabel>
                                <Select
                                    placeholder="pilih category tempat"
                                    value={data.category_id}
                                    data={categories}
                                    onChange={(e) => setData("category_id", e)}
                                />
                                {errors.category_id ? (
                                    <Error value={errors.category_id} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">Tier</InputLabel>
                                <Select
                                    value={data.tier_id}
                                    data={tiers}
                                    onChange={(e) => setData("tier_id", e)}
                                />
                                {errors.tier_id ? (
                                    <Error value={errors.tier_id} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">
                                    Sub Category
                                </InputLabel>
                                <MultipleSelect
                                    selectedItem={data.sub_categories}
                                    data={sub_categories}
                                    onChange={(e) =>
                                        setData("sub_categories", e)
                                    }
                                />
                                {errors.sub_categories ? (
                                    <Error value={errors.sub_categories} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">
                                    Facility
                                </InputLabel>
                                <MultipleSelect
                                    selectedItem={data.facilities}
                                    data={facilities}
                                    onChange={(e) => setData("facilities", e)}
                                />
                                {errors.facilities ? (
                                    <Error value={errors.facilities} />
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 mt-6 gap-6 mg-6">
                        <div className="col-span-6">
                            <div>
                                <InputLabel
                                    className="mb-2"
                                    value="Nama akomodasi"
                                />
                                <Input
                                    className="w-full"
                                    name="name"
                                    id="name"
                                    onChange={onChange}
                                    value={data.name}
                                />
                                {errors.name ? (
                                    <Error value={errors.name} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div>
                                <InputLabel
                                    className="mb-2"
                                    value="Link Google Maps"
                                />
                                <Input
                                    className="w-full"
                                    placeholder="www.google.co.id/maps/yourplace"
                                    name="url"
                                    id="url"
                                    onChange={onChange}
                                    value={data.url}
                                />
                                {errors.url ? (
                                    <Error value={errors.url} />
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 mb-6">
                        <InputLabel className="mb-2" value="deskripsi tempat" />
                        <Textarea
                            name="description"
                            id="description"
                            onChange={onChange}
                            value={data.description}
                        />
                        {errors.description ? (
                            <Error value={errors.description} />
                        ) : null}
                    </div>
                    <div className="grid grid-cols-12 gap-6 mg-6">
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">
                                    Kapasitas Tempat
                                </InputLabel>
                                <Input
                                    type="number"
                                    name="capacity"
                                    id="capacity"
                                    onChange={onChange}
                                    value={data.capacity}
                                />
                                {errors.capacity ? (
                                    <Error value={errors.capacity} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">
                                    Jumlah Kamar Mandi
                                </InputLabel>
                                <Input
                                    type="number"
                                    name="bath"
                                    id="bath"
                                    onChange={onChange}
                                    value={data.bath}
                                />
                                {errors.bath ? (
                                    <Error value={errors.bath} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">
                                    Jumlah Tempat Tidur
                                </InputLabel>
                                <Input
                                    type="number"
                                    name="bed"
                                    id="bed"
                                    onChange={onChange}
                                    value={data.bed}
                                />
                                {errors.bed ? (
                                    <Error value={errors.bed} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">
                                    Harga tempat /malam
                                </InputLabel>
                                <Input
                                    type="number"
                                    name="price"
                                    id="price"
                                    onChange={onChange}
                                    value={data.price}
                                />
                                {errors.price ? (
                                    <Error value={errors.price} />
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 mg-6 mt-6">
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">Negara</InputLabel>
                                <Select
                                    placeholder="pilih negara"
                                    value={data.country_id}
                                    data={countries}
                                    onChange={(e) => setData("country_id", e)}
                                />
                                {errors.country_id ? (
                                    <Error value={errors.country_id} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">Kota</InputLabel>
                                <Select
                                    placeholder="pilih kota"
                                    value={data.city_id}
                                    data={cities}
                                    onChange={(e) => setData("city_id", e)}
                                />
                                {errors.city_id ? (
                                    <Error value={errors.city_id} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">
                                    Kecamatan
                                </InputLabel>
                                <Select
                                    placeholder="pilih kecamatan"
                                    value={data.subdistrict_id}
                                    data={subdistricts}
                                    onChange={(e) =>
                                        setData("subdistrict_id", e)
                                    }
                                />
                                {errors.subdistrict_id ? (
                                    <Error value={errors.subdistrict_id} />
                                ) : null}
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div>
                                <InputLabel className="mb-2">Desa</InputLabel>
                                <Select
                                    placeholder="pilih desa"
                                    value={data.village_id}
                                    data={villages}
                                    onChange={(e) => setData("village_id", e)}
                                />
                                {errors.village_id ? (
                                    <Error value={errors.village_id} />
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <hr />
                    </div>
                    <div className="text-center">
                        <Button className="mt-10 w-72">Create Article</Button>
                    </div>
                </form>
            </Container2>
        </div>
    );
}

Create.layout = (page) => <App2 children={page} />;
