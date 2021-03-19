<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product_locations;


class HomeOwnerController extends Controller
{
	public function getAll() {
		$locations = Product_locations::get();
		return response()->json($locations,200);
	}
}
