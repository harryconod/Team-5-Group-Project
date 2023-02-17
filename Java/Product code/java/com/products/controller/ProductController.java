package com.products.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import com.products.models.Product;
import com.products.service.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@GetMapping(value = { "", "/" })
	public @NonNull Iterable<Product> getProducts(){
		return productService.getAllProducts();
	}
}
