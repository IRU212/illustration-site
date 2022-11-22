<?php

namespace App\Models\Post;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $table = "like_post";

    protected $fillable = [
        "user_id",
        "post_id"
    ];
}
