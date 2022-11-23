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

        $data = [];

        foreach ($posts as $index => $item) {

            // 投稿したユーザのID
            $user_id = $item->user_id;

            // 配列を空に
            $post_data = [];

            // postを追加
            $post_data['post'] = $item;

            // post.user_idのユーザ情報を取得
            $post_data['user'] = User::find($user_id);

            // 配列の一次目に追加
            $data[] = $post_data;
        }

        return response()->json($data);
    }
}
