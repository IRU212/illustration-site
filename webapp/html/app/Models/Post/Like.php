<?php

namespace App\Models\Post;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Like extends Model
{
    protected $table = "like_post";

    protected $fillable = [
        "user_id",
        "post_id"
    ];

}
