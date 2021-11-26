<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    use HasFactory;
    public $primaryKey = 'id';
    protected $fillable = [
        'status', 'no_telp_keluarga', 'ktm', 'kk'
    ];

    static function getOrder(){
        $return=DB::table('orders')
        ->join('pinjamen','orders.id_pinejaman','=','pinjamen.id_pinjaman');
        return $return;
    }
}