<?php

namespace App\Http\Controllers;

use App\Http\Resources\AccommodationResource;
use App\Http\Resources\DetailAccommodationResource;
use App\Models\Accommodation;
use App\Models\Category;
use App\Models\City;
use App\Models\Country;
use App\Models\Facility;
use App\Models\Image;
use App\Models\SubCategory;
use App\Models\Subdistrict;
use App\Models\Tier;
use App\Models\Village;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccommodationController extends Controller
{
    public $facilities;
    public $sub_categories;
    public $categories;
    public $countries;
    public $cities;
    public $subdistricts;
    public $villages;
    public $tiers;

    public function __construct()
    {
        $this->middleware('auth')->except('show');
        $this->facilities = Facility::select('id', 'name')->get();
        $this->sub_categories = SubCategory::select('id', 'name')->get();
        $this->categories = Category::select('id', 'name')->get();
        $this->countries = Country::select('id', 'country')->get();
        $this->cities = City::select('id', 'city')->get();
        $this->subdistricts = Subdistrict::select('id', 'subdistrict')->get();
        $this->villages = Village::select('id', 'village')->get();
        $this->tiers = Tier::select('id', 'name')->get();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $accommodations = Accommodation::query()
            ->with(['category', 'sub_categories', 'tier', 'user'])->whereBelongsTo($request->user())
            ->select('id', 'name', 'slug', 'price', 'country_id', 'subdistrict_id', 'village_id', 'city_id', 'category_id', 'tier_id', 'user_id')
            ->paginate(12)->withQueryString();

        // $accommodations = Accommodation::whereBelongsTo($request->user())->get();

        return inertia('Accommodations/Index', [
            'accommodations' => AccommodationResource::collection($accommodations)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia('Accommodations/Create', [
            'facilities' => $this->facilities,
            'sub_categories' => $this->sub_categories,
            'categories' => $this->categories,
            'countries' => $this->countries,
            'cities' => $this->cities,
            'subdistricts' => $this->subdistricts,
            'villages' => $this->villages,
            'tiers' => $this->tiers,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'photos' => ['nullable', 'image'],
            'sub_categories' => ['required', 'array'],
            'facilities' => ['required', 'array'],
            'category_id' => ['required', 'exists:categories,id'],
            'country_id' => ['required', 'exists:countries,id'],
            'city_id' => ['required', 'exists:cities,id'],
            'subdistrict_id' => ['required', 'exists:subdistricts,id'],
            'village_id' => ['required', 'exists:villages,id'],
            'tier_id' => ['required', 'exists:tiers,id'],
            'name' => ['required', 'string', 'min:10'],
            'description' => ['required', 'string', 'min:10'],
            'capacity' => ['required', 'numeric'],
            'bath' => ['required', 'numeric'],
            'bed' => ['required', 'numeric'],
            'price' => ['required', 'numeric', 'min:0', 'regex:/^\d+(\.\d{1,2})?$/'],
            'url' => ['required', 'string', 'min:10'],
        ]);

        $photos = $request->file('photos');

        $accommodation = $request->user()->accommodations()->create([
            'category_id' => $request->category_id,
            'country_id' => $request->country_id,
            'city_id' => $request->city_id,
            'subdistrict_id' => $request->subdistrict_id,
            'village_id' => $request->village_id,
            'tier_id' => $request->tier_id,
            'name' => $name = $request->name,
            'slug' => $slug = str($name)->slug(),
            'description' => $request->description,
            'photo' => $request->hasFile('photos') ? $photos->storeAs('images/accommodations', $slug .'.'. $photos->extension()) : null,
            'capacity' => $request->capacity,
            'bath' => $request->bath,
            'bed' => $request->bed,
            'price' => $request->price,
            'url' => $request->url,
        ]);

        $accommodation->facilities()->attach($request->facilities);
        // $accommodation->images()->attach($request->hasFile('photo') ? $photos->storeAs('images/accommodations', $slug . '.' . $photos->extension()) : null);
        $accommodation->sub_categories()->attach($request->sub_categories);

        return to_route('accommodations.show', $accommodation);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Accommodation  $accommodation
     * @return \Illuminate\Http\Response
     */
    public function show(Accommodation $accommodation)
    {
        // return Inertia('Accommodations/Show', [
        //     'accommodation' => DetailAccommodationResource::make($accommodation->load(['category', 'sub_categories', 'tier', 'user']))
        // ]);
        return Inertia('Accommodations/Show', [
            'accommodation' => new DetailAccommodationResource($accommodation),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Accommodation  $accommodation
     * @return \Illuminate\Http\Response
     */
    public function edit(Accommodation $accommodation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Accommodation  $accommodation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Accommodation $accommodation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Accommodation  $accommodation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Accommodation $accommodation)
    {
        //
    }
}
