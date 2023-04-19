<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accommodations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id');
            $table->foreignId('badge_id')->nullable();
            $table->foreignId('user_id');
            $table->foreignId('tier_id');
            $table->foreignId('country_id');
            $table->foreignId('city_id');
            $table->foreignId('subdistrict_id');
            $table->foreignId('village_id');
            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->longText('photo')->nullable();
            $table->integer('capacity');
            $table->integer('bath');
            $table->integer('bed');
            $table->double('price');
            $table->string('url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accommodations');
    }
};
