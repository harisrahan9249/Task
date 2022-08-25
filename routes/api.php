<?php

use App\Models\User;
use App\Models\UserAddress;
use App\Models\Supplier;



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::post('get-profile', 'ApiController@getprofile');
// Route::resource('user','ApiController');
// Route::get('users','ApiController@show');
// Route::group(['prefix' => '/v1', 'as' => 'api'], function () {
//     Route::get('base', [ApiController::class, 'base'])->name('base');
// });
// Route::get('/User', [App\Http\Controllers\Api\ApiController::class, 'index']);
Route::get('/users',function(){
    $users = User::get();
    return response()->json($users);
});
Route::get('/address',function(){
    $address = UserAddress::get();
    return response()->json($address);

});
Route::get('/suppliers',function(){
    $suppliers = Supplier::get();
    return response()->json($suppliers);

});
Route::post('/userdata', 'App\Http\Controllers\UserDataController@getData');