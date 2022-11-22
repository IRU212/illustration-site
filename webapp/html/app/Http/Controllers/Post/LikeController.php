<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function index($userId,$postId)
    {
        $like = new Like();

        $data = $like->where('user_id',$userId)->where('post_id',$postId)->exists();

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $like = new Like();

        $like->user_id = $request->user_id;
        $like->post_id = $request->post_id;

        // 保存
        $like->save();
    }

    public function destory(Request $request)
    {
        $like = new Like();

        $like->where('user_id',$request->user_id)->where('post_id',$request->post_id)->delete();
    }
}
