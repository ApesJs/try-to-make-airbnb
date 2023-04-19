<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class AccommodationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'slug' => $this->category->slug,
            ],
            'sub_categories' => $this->sub_categories->map(fn ($sc) => [
                'id' => $sc->id,
                'name' => $sc->name,
                'slug' => $sc->slug,
            ]),
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'email' => $this->user->email,
                'address' => $this->user->address,
                'about' => $this->user->about,
                'gender' => $this->user->gender,
            ],
            'name' => $this->name,
            'slug' => $this->slug,
            'photo' => $this->photo,
            // 'photo' => $this->photo ? Storage::url($this->photo) : null,
            'price' => $this->price,
            'country' => [
                'id' => $this->country->id,
                'country' => $this->country->country,
                'slug' => $this->country->slug,
            ],
            'city' => [
                'id' => $this->city->id,
                'city' => $this->city->city,
                'slug' => $this->city->slug,
            ],
            'subdistrict' => [
                'id' => $this->subdistrict->id,
                'subdistrict' => $this->subdistrict->subdistrict,
                'slug' => $this->subdistrict->slug,
            ],
            'village' => [
                'id' => $this->village->id,
                'village' => $this->village->village,
                'slug' => $this->village->slug,
            ],
        ];
    }
}
