<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table = "notification";

    protected $fillable = [
        'user_id',
        'destination',
        'message',
        'read',
        'notification_type_id'
    ];
}
