<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index($id)
    {
        $data = Post::with('user')
                    ->where('user_id',$id)
                    ->orderBy('created_at','desc')
                    ->get();

        return response()->json($data);
    }
}
