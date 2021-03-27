<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product_locations;
use App\Property_type;
use App\HomeOwner_products;
use App\Location_features;
use App\Product_coverage_upgrades;
use DB;

class HomeOwnerController extends Controller
{
	public function getAll() {
		$locations = Product_locations::get();
		return response()->json($locations,200);
	}

	public function getProducts($loc_id) {
		$products = DB::table('ho_products')
			->join('ho_property_type', 'ho_property_type.id', '=', 'ho_products.property_type_id')
			->join('ho_product_locations', 'ho_product_locations.id', '=', 'ho_products.location_id')
			->select('ho_products.*', 'ho_product_locations.location_name', 'ho_property_type.name as unit_type')
			->where('ho_products.location_id', $loc_id)
			->get();
		return response()->json($products,200);
	}


	public function getLocationUniqFea($loc_id) {
		$features = Location_features::where('location_id', $loc_id)->get();
		return response()->json($features,200);
	}

	public function getProductCovUpgrade($prod_id) {
		$upgrades = Product_coverage_upgrades::where('product_id', $prod_id)->get();
		return response()->json($upgrades,200);
	}
}
