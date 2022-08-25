<?php

namespace Database\Seeders;

use App\Models\Supplier;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SupplierTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Supplier::create([
            'phone' =>'1-770-736-8031 x56442',
            'company_ICO' =>'8832749',
            'website' =>'hildegard.org',
            'company_name'=>'Romaguera-Crona'

        ]);
        Supplier::create([
            'phone' =>'010-692-6593 x0912',
            'company_ICO' =>'8832749',
            'website' =>'anastasia.net',
            'company_name'=>'Deckow-Crist'

        ]);
        Supplier::create([
            'phone' =>'1-463-123-4447',
            'company_ICO' =>'8832749',
            'website' =>'ramiro.info',
            'company_name'=>'Romaguera-Jacobson'

        ]);
        Supplier::create([
            'phone' =>'493-170-9623 x156',
            'company_ICO' =>'8832749',
            'website' =>'kale.biz',
            'company_name'=>'Robel-Corkery'

        ]);
        Supplier::create([
            'phone' =>'(254)954-1289',
            'company_ICO' =>'8832749',
            'website' =>'demarco.info',
            'company_name'=>'Keebler LLC'

        ]);
        Supplier::create([
            'phone' =>'1-477-935-8478 x6430',
            'company_ICO' =>'8832749',
            'website' =>'ola.org',
            'company_name'=>'Considine-Lockman'

        ]);
        Supplier::create([
            'phone' =>'210.067.6132',
            'company_ICO' =>'8832749',
            'website' =>'elvis.io',
            'company_name'=>'Johns Group'

        ]);
        Supplier::create([
            'phone' =>'586.493.6943 x140',
            'company_ICO' =>'8832749',
            'website' =>'jacynthe.com',
            'company_name'=>'Abernathy Group'

        ]);
        Supplier::create([
            'phone' =>'(775)976-6794 x41206',
            'company_ICO' =>'8832749',
            'website' =>'conrad.com',
            'company_name'=>'Yost and Sons'

        ]);
        Supplier::create([
            'phone' =>'024-648-3804',
            'company_ICO' =>'8832749',
            'website' =>'ambrose.net',
            'company_name'=>'Hoeger LLC'

        ]);

            
    }
}
