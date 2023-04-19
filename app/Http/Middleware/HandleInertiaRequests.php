<?php

namespace App\Http\Middleware;

use App\Models\Accommodation;
use App\Models\Cart;
use App\Models\Save;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $cartBelongsToRequestUser = 0;
        $saveBelongsToRequestUser = 0;
        if(!empty($request->user())){   
            $cartBelongsToRequestUser = Cart::whereBelongsTo($request->user())->whereNull('paid_at')->count();
            $saveBelongsToRequestUser = Save::whereBelongsTo($request->user())->count();
        }
        // $cartBelongsToRequestUser = Cart::whereBelongsTo($request->user())->whereNull('paid_at')->count();
        // $saveBelongsToRequestUser = Save::whereBelongsTo($request->user())->count();
        $subCategoriesGlobal = SubCategory::select('name', 'slug')->get();
        Cache::flush();
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],

            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },

            'sub_categories_global' => $subCategoriesGlobal,

            //$request->user() ? artinya dia cek apakah ada user yang login, kalau ada maka jalankan perintah Cart::whereBelongsTo($request->user())->whereNull('paid_at')->get() kalau tidak ada maka null
            // arti dari sintak ini Cart::whereBelongsTo($request->user())->whereNull('paid_at')->get() adalah untuk mengambil semua data yang ada pada tabel carts tapi yang field paid_at nya yang kosong
            'carts_global_count' => $request->user() ? Cache::rememberForever('carts_global_count', fn () => $cartBelongsToRequestUser) : null,

            'saves_global_count' => $request->user() ? Cache::rememberForever('saves_global_count', fn () => $saveBelongsToRequestUser) : null,
        ]);
    }
}
