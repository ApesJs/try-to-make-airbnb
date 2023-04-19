<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Accommodation>
 */
class AccommodationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => rand(1,4),
            'tier_id' => rand(1, 5),
            'country_id' => rand(1, 10),
            'city_id' => rand(1, 10),
            'subdistrict_id' => rand(1, 10),
            'village_id' => rand(1, 10),
            'user_id' => User::factory(),
            'name' => $name = str($this->faker->sentence(10))->title(), 
            'slug' => str($name)->slug(),
            'description' => $this->faker->sentence(100),
            // 'photo' => null,
            'capacity' => rand(4, 20),
            'bath' => rand(2, 5),
            'bed' => rand(2, 5),
            'price' => rand(250000, 10000000),
            'url' => $this->faker->url(),
        ];
    }
}
