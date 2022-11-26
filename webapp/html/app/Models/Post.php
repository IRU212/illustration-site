<?php

namespace App\Models;

use App\Models\Post\Like;
use App\Models\User\Block;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = "post";

    protected $fillable = [
        "message",
        "image",
        "user_id"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class,'like_post','user_id','post_id')->withPivotValue();
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function blocks()
    {
        return $this->hasMany(Block::class);
    }
}
