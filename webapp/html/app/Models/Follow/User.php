<?php

namespace App\Models\Follow;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = "follow_user";

    protected $fillable = [
        "user_id",
        "following"
    ];
}
