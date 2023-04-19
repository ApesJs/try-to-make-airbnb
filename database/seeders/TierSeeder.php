<?php

namespace Database\Seeders;

use App\Models\Tier;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = 'SmilpySupreme', 'slug' => str($name)->slug(), 'description' => 'Tier 1'],
            ['name' => $name = 'SmilpyLuxe', 'slug' => str($name)->slug(), 'description' => 'Tier 2'],
            ['name' => $name = 'SmilpyPlus', 'slug' => str($name)->slug(), 'description' => 'Tier 3'],
            ['name' => $name = 'SmilpyVerified', 'slug' => str($name)->slug(), 'description' => 'Tier 4'],
            ['name' => $name = 'SmilpyUnverified', 'slug' => str($name)->slug(), 'description' => 'Tier 5'],
        ])->each(fn ($q) => Tier::create($q));
    }
}
