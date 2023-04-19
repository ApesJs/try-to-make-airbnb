<?php

namespace App\Http\Controllers;

use App\Http\Resources\AccommodationResource;
use App\Http\Resources\DetailAccommodationResource;
use App\Models\Accommodation;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public $sub_categories;

    public function __construct()
    {
        $this->sub_categories = SubCategory::select('name', 'slug')->get();
    }

    public function index(Request $request)
    {
        $accommodations = Accommodation::query()
            ->select('id', 'name', 'slug', 'price', 'country_id', 'city_id', 'subdistrict_id', 'village_id', 'category_id', 'user_id')
            ->with(['sub_categories', 'facilities'])
            ->paginate(12)->withQueryString();
        // dd($accommodations);                     

        return inertia('Home', [
            'accommodations' => AccommodationResource::collection($accommodations),
            'sub_categories' => $this->sub_categories,
        ]);
    }
}
