<?php

namespace Database\Seeders;
use App\Models\UserAddress;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserAddressTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserAddress::create([
            'street'=>'Kulas Light',
            'suite' =>'Apt. 556',
            'city' =>'Gwenborough',
            'zipcode' =>'92998-3874'
        ]);
        UserAddress::create([
            'street'=>'Victor Plains',
            'suite' =>'Suite 879',
            'city' =>'Wisokyburgh',
            'zipcode' =>'90566-7771'
        ]);
        UserAddress::create([
            'street'=>'Douglas Extension',
            'suite' =>'Suite 847',
            'city' =>'McKenziehaven',
            'zipcode' =>'59590-4157'
        ]);
        UserAddress::create([
            'street'=>'Hoeger Mall',
            'suite' =>'Apt. 692',
            'city' =>'South Elvis',
            'zipcode' =>'53919-4257'
        ]);
        UserAddress::create([
            'street'=>'Skiles Walks',
            'suite' =>'Suite 351',
            'city' =>'Roscoeview',
            'zipcode' =>'33263'
        ]);
        UserAddress::create([
            'street'=>'Norberto Crossing',
            'suite' =>'Apt. 950',
            'city' =>'South Christy',
            'zipcode' =>'23505-1337'
        ]);
        UserAddress::create([
            'street'=>'Rex Trail',
            'suite' =>'Suite 280',
            'city' =>'Howemouth',
            'zipcode' =>'58804-1099'
        ]);
        UserAddress::create([
            'street'=>'Ellsworth Summit',
            'suite' =>'Suite 729',
            'city' =>'Aliyaview',
            'zipcode' =>'45169'
        ]);
        UserAddress::create([
            'street'=>'Dayna Park',
            'suite' =>'Suite 449',
            'city' =>'Bartholomebury',
            'zipcode' =>'76495-3109'
        ]);
        UserAddress::create([
            'street'=>'Kattie Turnpik',
            'suite' =>'Suite 198',
            'city' =>'Lebsackbury',
            'zipcode' =>'31428-2261'
        ]);
       
    }
}
