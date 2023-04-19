<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Accommodation;
use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index(Request $request)
    {
        // $carts = Cart::query()->with('accommodation')->whereBelongsTo($request->user())->whereNull('paid_at')->get();
        $carts = Cart::whereBelongsTo($request->user())->get();
        // dd($carts);
        return Inertia('Cart/Index',[
            'carts' => CartResource::collection($carts)
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
        $accommodation->carts()->updateOrCreate([
            //sintak update jika data nya ada di tabel
            'user_id' => $request->user()->id,
            'accommodation_id' => $accommodation->id,
        ],[
            //sintak insert jika datanya tidak ada dalam tabel
            'user_id' => $request->user()->id, 
            'price' => $accommodation->price,
        ]);

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
