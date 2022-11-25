<?php

use App\Http\Controllers\Follow\CountController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\Like\LisController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\Post\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
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

// post検索機能
Route::get('post/like/destory',[LikeController::class,'destory'])->name('post.like.destory');
Route::post('post/like/destory',[LikeController::class,'destory'])->name('post.like.destory');

// profile
Route::get('profile/{id}/index',[UserController::class,'index'])->name('profile.index');

Route::get('profile/{id}/update',[UserController::class,'update'])->name('profile.update');
Route::post('profile/{id}/update',[UserController::class,'update'])->name('profile.update');

// いいね一覧

Route::get('/like/list/{userId}/index',[LisController::class,'index'])->name('like.list.index');


// 検索機能
Route::get('/search/{keyword}/index',[SearchController::class,'index'])->name('search.index');

// フォロー機能
Route::get('follow/{userId}/{profileId}/index',[FollowController::class,'index'])->name('follow.index');

Route::get('follow/store',[FollowController::class,'store'])->name('follow.store');
Route::post('follow/store',[FollowController::class,'store'])->name('follow.store');

Route::get('follow/destory',[FollowController::class,'destory'])->name('follow.destory');
Route::post('follow/destory',[FollowController::class,'destory'])->name('follow.destory');

// フォロー・フォロワーカウント
Route::get('count/{userId}/index',[CountController::class,'index'])->name('follow.count.index');

// アカウント削除機能
Route::get('user/delete',[UserController::class,'delete'])->name('user.delete');
Route::post('user/delete',[UserController::class,'delete'])->name('user.delete');

// 通知機能
Route::get('notification/{id}/index',[NotificationController::class,'index'])->name('notification.index');

Route::get('notification/store',[NotificationController::class,'store'])->name('notification.store');
Route::post('notification/store',[NotificationController::class,'store'])->name('notification.store');

// ブロック機能
Route::get('notification/store',[NotificationController::class,'store'])->name('notification.store');
Route::post('notification/store',[NotificationController::class,'store'])->name('notification.store');
