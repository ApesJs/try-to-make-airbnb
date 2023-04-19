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
        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('icon')->nullable();
            $table->string('description')->nullable();
            $table->timestamps();
        });

        Schema::create('accommodation_facility', function (Blueprint $table) {
            $table->foreignId('accommodation_id');
            $table->foreignId('facility_id');
            $table->primary(['accommodation_id', 'facility_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('facilities');
        Schema::dropIfExists('accommodation_facility');
    }
};
