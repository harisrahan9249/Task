<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getprofile(){
        // $userId = request('user_id');
        // $user = User::find($userId);
        // return response()->json([
        //     'status' =>200,
        //     'data' =>[
        //         'profile' =>$user,
        //         'orders' =>$user->orders,
        //         'address' =>$user->address  
        //     ]
             
        // ]);
    }
    // public function search($phrase)
    // {
    //     $id = Auth::id();

    //     if (!$id) return null;

    //     $result = Entry::where('user_id', $id)->where('user_name', 'like', '%' . $phrase . '%')->get();

    //     return $result;
    // }
    // public function index(Request $request)
    // {
    //     $users = User::all();
    //     $users = Person::with('aliases')->with('missions')
    //     ->where('status_id', '=', $status)
    //     ->get();
    //     return $users;
    // }
    public function index()
    {
        $people = User::get();
        return view('User', compact('User'));
    }
} 
