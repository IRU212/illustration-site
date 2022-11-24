<?php

namespace App\Http\Controllers\Follow;

use App\Http\Controllers\Controller;
use App\Models\Follow\User;
use App\Models\Post\Like;
use Illuminate\Http\Request;

class CountController extends Controller
{
    public function index($userId)
    {
        $follow = new User();

        $follow_count = $follow->where('user_id',$userId)->count();
        $follower_count = $follow->where('following',$userId)->count();

        return response()->json([
            'follow_count' => $follow_count,
            'follower_count' => $follower_count
        ]);
    }
}
