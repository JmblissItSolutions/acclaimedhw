<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});

//For get all HomeOwner locations ( states )
Route::get('get_holocations', 'HomeOwnerController@getAll');


//For get all slider Slides
Route::get('get_sliders', 'PagesController@getSlider');


//For get Products by Property Type/Unit size for homeowner locations
Route::get('get_hoproducts/{loc_id}', 'HomeOwnerController@getProducts');

//For get Location Unique Features by location ID 
Route::get('get_location_unique_features/{loc_id}', 'HomeOwnerController@getLocationUniqFea');

//For get Homeowner Product Coverage Upgrades by Product id 
Route::get('get_hoproducts_covup/{prod_id}', 'HomeOwnerController@getProductCovUpgrade');
