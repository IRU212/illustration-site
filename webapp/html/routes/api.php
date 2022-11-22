<?php

use App\Http\Controllers\Post\LikeController;
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

// post いいね機能
Route::get('post/like/{userId}/{postId}/index',[LikeController::class,'index'])->name('post.like.index');

Route::get('post/like/store',[LikeController::class,'store'])->name('post.like.store');
Route::post('post/like/store',[LikeController::class,'store'])->name('post.like.store');

Route::get('post/like/destory',[LikeController::class,'destory'])->name('post.like.destory');
Route::post('post/like/destory',[LikeController::class,'destory'])->name('post.like.destory');

// profile

Route::get('profile/{id}/index',[UserController::class,'index'])->name('profile.index');
