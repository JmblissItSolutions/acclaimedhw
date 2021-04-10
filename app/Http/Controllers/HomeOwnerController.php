<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product_locations;
use App\Property_type;
use App\HomeOwner_products;
use App\HomeownerOrders;
use App\Location_features;
use App\Product_coverage_upgrades;
use App\Orderitems;
use DB;
use Validator;

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
		// echo "**************";
		//print_r($upgrades);
		$newupgrades = array();
		foreach ($upgrades as $upgrade) {
			$upgrade['quantity'] = 0;
			$newupgrades[] = $upgrade;
		}
		return response()->json($newupgrades,200);
	}


	public function createCheckoutOrder(Request $request) {
		$requestdata = (object)$request->json()->all();
		$rules = array(
			'firstname' => 'required',
			'lastname' => 'required',
			'country' => 'required',
			'street1' => 'required',
			'city' => 'required',
			'state' => 'required',
			'pincode' => 'required',
			'phone' => 'required|numeric',
			'email' => 'required|email',
			'prop_street1' => 'required',
			'prop_city' => 'required',
			'prop_state' => 'required',
			'prop_zipcode' => 'required',
			'subtotal' => 'required',
			'total' => 'required',
			'pay_method' => 'required',
			'status' => 'required',
		);
		$validator = Validator::make($request->all(),$rules);
		if($validator->fails()){
			return response()->json([
				"result" => false,
				"message" => $validator->errors()->first(),
			], 422);
		} else {
			$hoOrder = new HomeownerOrders;
			$hoOrder->firstname = $requestdata->firstname;
			$hoOrder->lastname = $requestdata->lastname;
			$hoOrder->company = $requestdata->company;
			$hoOrder->country = $requestdata->country;
			$hoOrder->street1 = $requestdata->street1;
			$hoOrder->street2 = $requestdata->street2;
			$hoOrder->city = $requestdata->city;
			$hoOrder->state = $requestdata->state;
			$hoOrder->pincode = $requestdata->pincode;
			$hoOrder->phone = $requestdata->phone;
			$hoOrder->email = $requestdata->email;
			$hoOrder->prop_street1 = $requestdata->prop_street1;
			$hoOrder->prop_street2 = $requestdata->prop_street2;
			$hoOrder->prop_city = $requestdata->prop_city;
			$hoOrder->prop_state = $requestdata->prop_state;
			$hoOrder->prop_zipcode = $requestdata->prop_zipcode;
			$hoOrder->order_notes = $requestdata->order_notes;
			$hoOrder->subtotal = $requestdata->subtotal;
			$hoOrder->total = $requestdata->total;
			$hoOrder->pay_method = $requestdata->pay_method;
			$hoOrder->status = $requestdata->status;
			$saved = $hoOrder->save();

			if($saved){
				return response()->json([
				"result" => true,
				"order_id" => $hoOrder->id,
				"message" => "hoOrder record created"
				], 201);
			}
			else{
				// App::abort(500, 'Error');
				return response()->json([
				"result" => false,
				"message" => "faillled record created"
				], 422);
			}
		}
	}


	public function addItemsinOrder(Request $request) {
		$requestdata = (object)$request->json()->all();
		$rules = array(
			'order_id' => 'required|numeric',
			'product_id' => 'required|numeric',
			'product_name' => 'required',
			'prod_type' => 'required',
			'quantity' => 'required|numeric',
		);
		$validator = Validator::make($request->all(),$rules);
		if($validator->fails()){
			return response()->json([
				"result" => false,
				"message" => $validator->errors()->first(),
			], 422);
		} else {
			$hoOrder = new Orderitems;
			$hoOrder->order_id = $requestdata->order_id;
			$hoOrder->product_id = $requestdata->product_id;
			$hoOrder->product_name = $requestdata->product_name;
			$hoOrder->prod_type = $requestdata->prod_type;
			$hoOrder->quantity = $requestdata->quantity;
			$saved = $hoOrder->save();

			if($saved){
				return response()->json([
				"result" => true,
				"message" => "hoOrder record created"
				], 201);
			}
			else{
				// App::abort(500, 'Error');
				return response()->json([
				"result" => false,
				"message" => "faillled record created"
				], 422);
			}
		}
	}



}
