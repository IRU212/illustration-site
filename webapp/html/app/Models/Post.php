<?php

namespace App\Models;

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
}
