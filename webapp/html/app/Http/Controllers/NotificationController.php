<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index($id)
    {
        $data = Notification::where('destination',$id)->get();

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $notification = new Notification();

        $user_name = User::find($request->user_id)->value('name');

        $message_data = [
            $user_name . "さんにフォローされました",
            $user_name . "さんにいいねされました"
        ];

        $notification->user_id = $request->user_id; // 送信元ユーザID
        $notification->destination = $request->destination; // 送信先ユーザID
        $notification->message = $message_data[$request->notification_type_id]; // 通知メッセージ
        $notification->notification_type_id = $request->notification_type_id; // メッセージタイプ

        $notification->save();
    }
}
