<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'Asep Jaenudin Sutarji',
                'email' => 'asepjaenudinsutarji@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('apesjs123'),
                'birthday' => now(),
                'address' => 'Kabupaten Cianjur',
                'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, in possimus. Reiciendis a maiores enim et, ratione, eligendi numquam ipsa ipsam saepe quaerat nostrum consequatur. Obcaecati vel eius atque ratione.',
                'job' => 'Junior Full-Stack Developer',
                'gender' => 'Laki Laki',
                'role' => 'Super User',
            ],[
                'name' => 'Rahmawati Sutarji',
                'email' => 'rahmawatisutarji@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('apesjs123'),
                'birthday' => now(),
                'address' => 'Kabupaten Cianjur',
                'about' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, in possimus. Reiciendis a maiores enim et, ratione, eligendi numquam ipsa ipsam saepe quaerat nostrum consequatur. Obcaecati vel eius atque ratione.',
                'job' => 'Student',
                'gender' => 'Perempuan',
                'role' => 'User',
            ],
        ])->each(fn ($q) => User::create($q));
    }
}
