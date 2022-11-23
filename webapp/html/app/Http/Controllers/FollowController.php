<?php

namespace App\Http\Controllers;

use App\Models\Follow\User;
use App\Models\Post\Like;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function index($userId,$profileId)
    {
        $follow = new User();

        $data = $follow->where('user_id',$userId)->where('following',$profileId)->exists();

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $follow = new User();

        $follow->user_id = $request->user_id;
        $follow->following = $request->following;

        $follow->save();
    }

    public function destory(Request $request)
    {
        $follow = new User();

        $follow->where('user_id',$request->user_id)->where('following',$request->following)->delete();
    }
}
