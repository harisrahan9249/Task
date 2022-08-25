<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'user_name' =>'Bret',
            'email' =>'Sincere@april.biz',
            'ICO' =>'2182921',

        ]);
        User::create([
            'user_name' =>'Antonette',
            'email' =>'Shanna@melissa.tv',
            'ICO' =>'24173410',

        ]);
        User::create([
            'user_name' =>'Samantha',
            'email' =>'Nathan@yesenia.net',
            'ICO' =>'26693780',

        ]);
        User::create([
            'user_name' =>'Karianne',
            'email' =>'Julianne.OConner@kory.org',
            'ICO' =>'27916791',

        ]);
        User::create([
            'user_name' =>'Chelsey Dietrich',
            'email' =>'Lucio_Hettinger@annie.ca',
            'ICO' =>'27916936',

        ]);
        User::create([
            'user_name' =>'Leopoldo_Corkery',
            'email' =>'Karley_Dach@jasper.info',
            'ICO' =>'28425308',

        ]);
        User::create([
            'user_name' =>'Elwyn.Skiles',
            'email' =>'Telly.Hoeger@billy.biz',
            'ICO' =>'28534557',

        ]);
        User::create([
            'user_name' =>'Maxime_Nienow',
            'email' =>'Sherwood@rosamond.me',
            'ICO' =>'35262',

        ]);
        User::create([
            'user_name' =>'Delphine',
            'email' =>'Chaim_McDermott@dana.io',
            'ICO' =>'35432',

        ]);
        User::create([
            'user_name' =>'Moriah.Stanton',
            'email' =>'Rey.Padberg@karina.biz',
            'ICO' =>'35491',

        ]);
    }
}
