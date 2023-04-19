<?php

namespace App\Http\Controllers;

use App\Http\Resources\SaveResource;
use App\Models\Accommodation;
use App\Models\Save;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class SaveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $saves = Save::whereBelongsTo($request->user())->get();
        return Inertia('Save/Index',[
            'saves' => SaveResource::collection($saves),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Accommodation $accommodation)
    {
        $accommodation->saves()->updateOrCreate([
            //sintak update jika data nya ada di tabel
            'user_id' => $request->user()->id,
            'accommodation_id' => $accommodation->id,
            'category_id' => $accommodation->category_id,
        ],[
            //sintak insert jika datanya tidak ada dalam tabel
            'user_id' => $request->user()->id, 
        ]);

        Cache::forget('saves_global_count');
        // Cache::flush();
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Save  $save
     * @return \Illuminate\Http\Response
     */
    public function show(Save $save)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Save  $save
     * @return \Illuminate\Http\Response
     */
    public function edit(Save $save)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Save  $save
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Save $save)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Save  $save
     * @return \Illuminate\Http\Response
     */
    public function destroy(Save $save)
    {
        //
    }
}
