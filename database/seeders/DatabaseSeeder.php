<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Accommodation;
use App\Models\Cart;
use App\Models\City;
use App\Models\Country;
use App\Models\Save;
use App\Models\Subdistrict;
use App\Models\Tier;
use App\Models\Village;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            SubCategeorySeeder::class,
            TierSeeder::class,
            FacilitySeeder::class,
            AccommodationSeeder::class,
        ]);
        // Accommodation::factory(24)->create();
        Cart::factory(2)->create();
        Save::factory(2)->create();

        Country::factory(10)->create();
        City::factory(10)->create();
        Subdistrict::factory(10)->create();
        Village::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
