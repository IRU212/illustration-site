<?php

namespace App\Http\Controllers;

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
        $user->name = $request->name;

        // アイコン画像を変更
        $user->icon_path = base64_encode(file_get_contents($request->icon_path->getRealPath()));

        // 背景画像を変更
        $user->back_path = base64_encode(file_get_contents($request->back_path->getRealPath()));

        $user->save();

    }
}
