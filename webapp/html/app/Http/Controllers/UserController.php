<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Post\Like;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index($id)
    {
        $data = User::find($id);

        return response()->json($data);
    }

    public function update($id,Request $request)
    {
        $user = User::find($id);

        // 名前を変更
        if (!$request->name =='') {
            $user->name = $request->name;
        }

        // アイコン画像を変更
        if (!$request->icon_path == '') {
            $user->icon_path = base64_encode(file_get_contents($request->icon_path->getRealPath()));
        }

        // 背景画像を変更
        if (!$request->back_path == '') {
            $user->back_path = base64_encode(file_get_contents($request->back_path->getRealPath()));
        }

        $user->save();
    }

    public function delete(Request $request)
    {
        $user_id = $request->user_id;

        // アカウント削除
        User::find($user_id)->delete();

        // 投稿削除
        Post::where('user_id',$user_id)->delete();

        // フォロー・フォロワーデータ削除
        $follow = new \App\Models\Follow\User;

        $follow->where('user_id',$user_id)->delete();
        $follow->where('following',$user_id)->delete();

        // いいねデータ削除
        Like::where('user_id',$user_id)->delete();
    }
}
