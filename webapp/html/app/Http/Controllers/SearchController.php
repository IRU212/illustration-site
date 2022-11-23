<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index($keyword)
    {
        $query =  Post::query();

        if (!empty($keyword)) {
            $query->where('message','LIKE',"%{$keyword}%");
        }

        $data = $query->get();

        return response()->json($data);
    }
}
