package com.products.controller;

/**
 * Provides needed rest controller to access the products in the database, to add and retrieve them with
 * or without a search term as well as delete one from the database
 * 
 * @author  Harry Conod
*/

import java.rmi.ServerException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
		return productService.getAllProducts(null);
	}
	
	@GetMapping("/search")
	@ResponseBody
	public Iterable<Product> searchProducts(@RequestParam String q){
		return productService.getAllProducts(q);
	}
	
	@GetMapping("/{id}")
	public Product singleProduct(@PathVariable int id) {
		return productService.getProductById(id);
	}
	
	@PostMapping(path = "",
	        consumes = "application/json", 
	        produces = "application/json")
	public ResponseEntity<Product> create(@RequestBody Product newProduct) throws ServerException {
	    Product product = productService.addProduct(newProduct);
	    if (product == null) {
	        throw new ServerException("No product");
	    } else {
	        return new ResponseEntity<>(product, HttpStatus.CREATED);
	    }
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteProduct(@PathVariable int id) {
		productService.removeProduct(id);
	}
}
