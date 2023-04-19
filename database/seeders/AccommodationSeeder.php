<?php

namespace Database\Seeders;

use App\Models\Accommodation;
use App\Models\Facility;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccommodationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory(5)->hasAccommodations(12)->create();
        Accommodation::get()->each(function($accommodation) {
            $accommodation->facilities()->attach(
                Facility::get()->random(rand(1, 5))->pluck('id'),
            );
        });
        Accommodation::get()->each(function($accommodation) {
            $accommodation->sub_categories()->attach(
                SubCategory::get()->random(rand(1, 6))->pluck('id'),
            );
        });
    }
}
