<?php

namespace App\Http\Controllers\Block;

use App\Http\Controllers\Controller;
use App\Models\User\Block;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // ブロック機能
    public function store(Request $request)
    {
        $block = new Block();

        $block->user_id = $request->user_id;
        $block->block_user_id = $request->block_user_id;

        $block->save();
    }
}
