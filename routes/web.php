<?php

use App\Http\Controllers\AccommodationController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SaveController;
use App\Http\Controllers\SubCategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
// use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/home-category/{category:slug}', [HomeController::class, 'category'])->name('home.categoty');

Route::resource('/accommodations', AccommodationController::class);

Route::resource('/subcategories', SubCategoryController::class);

Route::get('saves', [SaveController::class, 'index']);

Route::get('carts', [CartController::class, 'index']);
Route::post('carts/add-to-cart/{accommodation:slug}', [CartController::class, 'store'])->name('cart.store');
Route::post('saves/add-to-save/{accommodation:slug}', [SaveController::class, 'store'])->name('save.store');

Route::middleware('auth')->group(function(){
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

require __DIR__.'/auth.php';
