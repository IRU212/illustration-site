<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Nette\Utils\DateTime;

class DataController extends Controller
{
    public function index($id)
    {
        $post = new Post();

        $objDateTime = new DateTime();

        // 現在の年月日を取得
        $now_year_month = $objDateTime->format('Y-m-d');

        // 現在の年月日のstrotimeを取得
        $now_strtotime = strtotime($now_year_month);


        $post_datas = $post->where('user_id',$id)->get();

        // $data_max_count = $post->where('user_id',$id)
        //                        ->orderBy('created_at')
        //                        ->get('created_at');

        // 月ごとの集計データ
        $one_data = 0;
        $two_data = 0;
        $three_data = 0;
        $four_data = 0;
        $five_data = 0;
        $six_data = 0;
        $seven_data = 0;
        $eight_data = 0;
        $nine_data = 0;
        $ten_data = 0;
        $ereven_data = 0;
        $tweleve_data = 0;


        foreach ($post_datas as $index => $item) {

            // created_atのみ取得
            $item_created_at = $item->created_at;

            // created_atを切り取り
            $item_created_at_cut = substr($item_created_at,0,10);

            // 時間をstrtotimeに変換
            $item_strtotime = strtotime($item_created_at_cut);

            // 現在の年月のstrotimeを差分を取得
            $diff_strtotime = $now_strtotime - $item_strtotime;

            // strotimeの差分をdateの月に変換
            $diff_month = date("m",$diff_strtotime);

            // Invalid numeric literal Error防止のため最初の0を切り取り
            $diff_month = (int)$diff_month;

            // 差分の月日の振り分け
            if ($diff_month == 1) {
                $one_data ++;
            } elseif ($diff_month == 2) {
                $two_data ++;
            } elseif ($diff_month == 3) {
                $three_data ++;
            } elseif ($diff_month == 4) {
                $four_data ++;
            } elseif ($diff_month == 5) {
                $five_data ++;
            } elseif ($diff_month == 6) {
                $six_data ++;
            } elseif ($diff_month == 7) {
                $seven_data ++;
            } elseif ($diff_month == 8) {
                $eight_data ++;
            } elseif ($diff_month == 9) {
                $nine_data ++;
            } elseif ($diff_month == 10) {
                $ten_dat ++;
            } elseif ($diff_month == 11) {
                $ereven_data ++;
            } elseif ($diff_month == 12) {
                $tweleve_data ++;
            }
        }

        // 最大値取り出しよう配列
        $data_list = [$one_data,$two_data,$three_data,$four_data,$five_data,$six_data,
                    $seven_data,$eight_data,$nine_data,$ten_data,$ereven_data,$tweleve_data];

        // 投稿数最大の数を取得
        $data_max_count = max($data_list);

        if ($data_max_count > 11) {

            // 切り上げ
            $subtraction = ceil($data_max_count / 6);

            $first_row = $data_max_count - $subtraction;
            $secound_row = $data_max_count - $subtraction * 2;
            $third_row = $data_max_count - $subtraction * 3;
            $four_row = $data_max_count - $subtraction * 4;
            $five_row = $data_max_count - $subtraction * 5;
            $six_row = $data_max_count - $subtraction * 6;
        } else {
            $first_row = 12;
            $secound_row = 10;
            $third_row = 8;
            $four_row = 6;
            $five_row = 4;
            $six_row = 2;
        }

        return response()->json([
            'row' => [
                'first_row' => $first_row,
                'secound_row' => $secound_row,
                'third_row' => $third_row,
                'four_row' => $four_row,
                'five_row' => $five_row,
                'six_row' => $six_row,
            ],
            'row_data' => [
                'one_data' => $one_data,
                'two_data' => $two_data,
                'three_data' => $three_data,
                'four_data' => $four_data,
                'five_data' => $five_data,
                'six_data' => $six_data,
                'seven_data' => $seven_data,
                'eight_data' => $eight_data,
                'nine_data' => $nine_data,
                'ten_data' => $ten_data,
                'ereven_data' => $ereven_data,
                'tweleve_data' => $tweleve_data
            ],
            'month' => [
                'one_month' => date('m'),
                'two_month' => date('m', strtotime('+1 month')),
                'three_month' => date('m', strtotime('+2 month')),
                'four_month' => date('m', strtotime('+3 month')),
                'five_month' => date('m', strtotime('+4 month')),
                'six_month' => date('m', strtotime('+5 month')),
                'seven_month' => date('m', strtotime('+6 month')),
                'eight_month' => date('m', strtotime('+7 month')),
                'nine_month' => date('m', strtotime('+8 month')),
                'ten_month' => date('m', strtotime('+9 month')),
                'ereven_month' => date('m', strtotime('+10 month')),
                'tweleve_month' => date('m', strtotime('+11 month'))
            ]
        ]);
    }
}
