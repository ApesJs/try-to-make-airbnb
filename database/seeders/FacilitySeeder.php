<?php

namespace Database\Seeders;

use App\Models\Facility;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FacilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = 'Wifi', 'slug' => str($name)->slug()],
            ['name' => $name = 'Mesin Cuci', 'slug' => str($name)->slug()],
            ['name' => $name = 'AC', 'slug' => str($name)->slug()],
            ['name' => $name = 'Area Kerja Khusus', 'slug' => str($name)->slug()],
            ['name' => $name = 'Pengering Rambut', 'slug' => str($name)->slug()],
            ['name' => $name = 'Dapur', 'slug' => str($name)->slug()],
            ['name' => $name = 'Mesin Pengering', 'slug' => str($name)->slug()],
            ['name' => $name = 'Pemanas Ruangan', 'slug' => str($name)->slug()],
            ['name' => $name = 'TV', 'slug' => str($name)->slug()],
            ['name' => $name = 'Setrika', 'slug' => str($name)->slug()],
        ])->each(fn ($q) => Facility::create($q));
    }
}
