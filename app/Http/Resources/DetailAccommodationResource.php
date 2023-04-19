<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class DetailAccommodationResource extends JsonResource
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
            'sub_categories' => $this->sub_categories->map(fn ($sub_category) => [
                'name' => $sub_category->name,
                'slug' => $sub_category->slug,
            ]),
            'facilities' => $this->facilities->map(fn ($facility) => [
                'name' => $facility->name,
                'slug' => $facility->slug,
            ]),
            'tier' => [
                'id' => $this->tier->id,
                'name' => $this->tier->name,
                'slug' => $this->tier->slug,
                'description' => $this->tier->description,
            ],
            // 'badge' => [
            //     'id' => $this->sub_category->id,
            //     'title' => $this->sub_category->title,
            //     'description' => $this->sub_category->description,
            //     'symbol' => $this->sub_category->symbol,
            // ],
            'user' => [
                'name' => $this->user->name,
                'created_at' => Carbon::parse($this->user->created_at)->format('d M Y'),
            ],
            'name' => $this->name,
            'slug' => $this->slug,
            'title' => $this->title,
            'subtitle' => $this->subtitle,
            'description' => $this->description,
            'photo' => $this->photo,
            'capacity' => $this->capacity,
            'bath' => $this->bath,
            'bed' => $this->bed,
            'price' => $this->price,
            'country' => $this->country,
            'city' => $this->city,
            'subcity' => $this->subcity,
            'url' => $this->url,
        ];
    }
}
