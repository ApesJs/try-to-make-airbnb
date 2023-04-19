<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function accommodations(){
        return $this->hasMany(Accommodation::class);
    }

    public function saves(){
        return $this->hasMany(Save::class);
    }
}
