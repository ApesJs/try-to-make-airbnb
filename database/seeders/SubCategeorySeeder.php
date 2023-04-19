<?php

namespace Database\Seeders;

use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubCategeorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = 'Hadap Pantai', 'slug' => str($name)->slug()],
            ['name' => $name = 'Kabin', 'slug' => str($name)->slug()],
            ['name' => $name = 'Peternakan', 'slug' => str($name)->slug()],
            ['name' => $name = 'Rumah Bumi', 'slug' => str($name)->slug()],
            ['name' => $name = 'Kamar Pribadi', 'slug' => str($name)->slug()],
            ['name' => $name = 'Kolam Renang Keren', 'slug' => str($name)->slug()],
            ['name' => $name = 'Pemandangan Cantik', 'slug' => str($name)->slug()],
            ['name' => $name = 'Dekat Pantai', 'slug' => str($name)->slug()],
            ['name' => $name = 'Tropis', 'slug' => str($name)->slug()],
            ['name' => $name = 'Desain Keren', 'slug' => str($name)->slug()],
            ['name' => $name = 'Rumah Kecil', 'slug' => str($name)->slug()],
            ['name' => $name = 'Luxe', 'slug' => str($name)->slug()],
        ])->each(fn ($q) => SubCategory::create($q));;
    }
}
