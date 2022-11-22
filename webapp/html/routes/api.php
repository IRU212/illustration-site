<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// post
Route::get('post/index',[PostController::class,'index'])->name('post.index');

Route::get('post/store',[PostController::class,'store'])->name('post.store');
Route::post('post/store',[PostController::class,'store'])->name('post.store');

// profile

Route::get('profile/{id}/index',[UserController::class,'index'])->name('profile.index');
