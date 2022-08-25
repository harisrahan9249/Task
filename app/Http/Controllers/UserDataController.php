<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserDataController extends Controller
{
    public function getData()
    {
        $userdata = User::with('address')->with('supplie')->get();        
        return $userdata;
    }
    
}
