<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subdistrict>
 */
class SubdistrictFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'subdistrict' => $name = $this->faker->state('cityDistrict'),
            'slug' => str($name)->slug(),
        ];
    }
}
