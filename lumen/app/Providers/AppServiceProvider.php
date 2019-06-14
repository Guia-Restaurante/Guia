<?php

namespace App\Providers;

use App\Dish;
use App\Restaurant;
use App\RestaurantPhoto;
use App\RestaurantVote;
use App\Address;
use App\Observers\DishObserver;
use App\Observers\RestaurantObserver;
use App\Observers\RestaurantPhotoObserver;
use App\Observers\RestaurantVoteObserver;
use App\Observers\AddressObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        
        Dish::observe(DishObserver::class);
        Restaurant::observe(RestaurantObserver::class);
        RestaurantPhoto::observe(RestaurantPhotoObserver::class);
        Address::observe(AddressObserver::class);
        RestaurantVote::observe(RestaurantVoteObserver::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}