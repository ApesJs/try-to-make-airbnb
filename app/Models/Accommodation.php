<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accommodation extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getRouteKeyName(){
        return 'slug';
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function country(){
        return $this->belongsTo(Country::class);
    }
    public function city(){
        return $this->belongsTo(City::class);
    }
    public function subdistrict(){
        return $this->belongsTo(Subdistrict::class);
    }
    public function village(){
        return $this->belongsTo(Village::class);
    }

    public function sub_categories(){
        return $this->belongsToMany(SubCategory::class);
    }

    public function tier(){
        return $this->belongsTo(Tier::class);
    }

    public function carts(){
        return $this->hasMany(Cart::class);
    }
    
    public function saves(){
        return $this->hasMany(Save::class);
    }

    public function facilities(){
        return $this->belongsToMany(Facility::class);
    }

    public function images(){
        return $this->belongsToMany(Image::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
