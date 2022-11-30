<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::create([
            "message" => "aawefewfaa",
            'user_id' => 24,
            // 'created_at' => "2022-10-26T09:10:17.000000Z",
            // "updated_at" => "2022-10-26T09:10:17.000000Z"
        ]);

        Post::create([
            "message" => "aaewffaa",
            'user_id' => 24,
            // 'created_at' => "2022-10-26T09:10:17.000000Z",
            // "updated_at" => "2022-10-26T09:10:17.000000Z"
        ]);

        Post::create([
            "message" => "aaweffwaa",
            'user_id' => 24,
            // 'created_at' => "2022-10-23T09:10:17.000000Z",
            // "updated_at" => "2022-10-23T09:10:17.000000Z"
        ]);

        Post::create([
            "message" => "aadqfaa",
            'user_id' => 24,
            // 'created_at' => "2022-8-26T09:10:17.000000Z",
            // "updated_at" => "2022-8-26T09:10:17.000000Z"
        ]);
    }
}
