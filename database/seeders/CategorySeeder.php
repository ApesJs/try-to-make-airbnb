<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = 'Rumah', 'slug' => str($name)->slug()],
            ['name' => $name = 'Apartemen', 'slug' => str($name)->slug()],
            ['name' => $name = 'Guesthouse', 'slug' => str($name)->slug()],
            ['name' => $name = 'Hotel', 'slug' => str($name)->slug()],
        ])->each(fn ($q) => Category::create($q));
    }
}
