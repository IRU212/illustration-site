<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/api/post/store');

        // $response->assertStatus(200)
        //          ->assertJson([
        //             'message' => 'test',
        //             'user_id' => 1
        //          ]);



        $response->assertStatus(200);
    }
}
