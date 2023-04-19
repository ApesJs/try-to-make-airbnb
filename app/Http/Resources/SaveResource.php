<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SaveResource extends JsonResource
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
            'accommodation' => [
                'id' => $this->accommodation->id, 
                'name' => $this->accommodation->name, 
                'slug' => $this->accommodation->slug, 
                'photo' => $this->accommodation->photo, 
                'price' => $this->accommodation->price,
                'country' => $this->accommodation->country, 
                'location' => $this->accommodation->location, 
            ],
            'category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'slug' => $this->category->slug,
            ]
        ];
    }
}
