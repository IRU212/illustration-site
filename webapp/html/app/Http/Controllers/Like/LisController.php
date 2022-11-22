<?php

namespace App\Http\Controllers\Like;

use App\Http\Controllers\Controller;
use App\Models\Post\Like;
use App\Models\User;
use Illuminate\Http\Request;

class LisController extends Controller
{
    public function index($userId)
    {
        $user = new User();

        $posts = $user->with('posts')->find($userId)->posts;

        return response()->json([
            'user' => User::find($userId),
            'posts' => $posts
        ]);
    }
}
