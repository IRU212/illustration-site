<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Post\Like;
use App\Models\User;
use App\Models\User\Block;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index($id)
    {
        // model呼び出し
        $post = new Post();
        $like = new Like();

        // 全ユーザIDを取得
        $all_user_id[] = User::pluck('id');

        // ミュートするユーザID
        $block_user_id[] = Block::where('user_id',$id)->pluck('block_user_id');

        // jsonを配列化
        $all_user_id_array = json_decode($all_user_id[0],true);
        $block_user_id_array = json_decode($block_user_id[0],true);

        // ミュートすしないIDを取得
        $result_user_id = array_diff($all_user_id_array,$block_user_id_array);

        // valueのみ取得
        $result_user_id_value = array_values($result_user_id);

        $data = [];

        foreach ($result_user_id_value as $index => $item) {
            $datas = $post->with('user')
                          ->where('user_id',$item)
                          ->orderBy('created_at','desc')
                          ->get(['message','id']);

            foreach ($datas as $index => $value) {
                $data[] = $value;
            }
        }

        // id の降順に並び替える
        // 並び替えの基準を取得
        $ids = array_column($data,'created_at');

        // 降順（SORT_DESC）に並び替える
        array_multisort($ids,SORT_DESC,$data);

        return response()->json($data);

        // dump($all_user_id[0]);
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
