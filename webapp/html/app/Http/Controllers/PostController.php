<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Post\Like;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        // model呼び出し
        $post = new Post();
        $like = new Like();

        // ログインユーザがいいねした投稿を絞り込み
        $data = $post->with('user')
                     ->orderBy('id','desc')
                     ->get();

        return response()->json($data);
    }

    public function store(Request $request)
    {
        // model呼び出し
        $post = new Post();

        $post->message = $request->message;
        $post->image = $request->image;
        $post->user_id  = $request->user_id;

        // 保存する
        $post->save();
    }
}
