<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Python\TestpythonController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// HOMEページ
Route::get('/home', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// プロフィールページ
Route::get('/profile/{id}', function () {
    return Inertia::render('Profile');
})->middleware(['auth', 'verified'])->name('profile');

// いいね一覧ページ
Route::get('/like/list/{id}', function () {
    return Inertia::render('LikeList');
})->middleware(['auth', 'verified'])->name('profile');

// 検索ページ
Route::get('search', function () {
    return Inertia::render('Search');
})->middleware(['auth', 'verified'])->name('profile');

Route::get('search/{keyword}', function () {
    return Inertia::render('Search');
})->middleware(['auth', 'verified'])->name('profile');

// 設定画面ページ
Route::get('setting', function () {
    return Inertia::render('Setting');
})->middleware(['auth', 'verified'])->name('profile');

// プロフィール設定
Route::get('setting/profile', function () {
    return Inertia::render('ProfileSetting');
})->middleware(['auth', 'verified'])->name('profile');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// 通知ページ
Route::get('notification', function () {
    return Inertia::render('Notification');
})->middleware(['auth', 'verified'])->name('profile');

// 通知ページ
Route::get('data', function () {
    return Inertia::render('Data');
})->middleware(['auth', 'verified'])->name('data');

require __DIR__.'/auth.php';


