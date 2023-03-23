package com.isra_organics.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/cartitem")
public class CartItemController {
	
	@GetMapping(path = "/all")
	public String getCartItem() {
		return "cartitem";
	}

}
