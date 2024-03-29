package com.isra_organics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isra_organics.productservice.ProductService;
import com.isra_organics.repository.Product;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	   private ProductService productService;

	   @GetMapping("")
	   public List<Product> getAllProducts() {
	      return productService.getAllProducts();
	   }

	   @GetMapping("/{id}")
	   public Product getProductById(@PathVariable(value = "id") Long id) {
	      return productService.getProductById(id);
	   }

	   @PostMapping("")
	   public Product createProduct(@Validated @RequestBody Product product) {
	      return productService.createProduct(product);
	   }

	   @PutMapping("/{id}")
	   public Product updateProduct(@PathVariable(value = "id") Long id, @Validated @RequestBody Product productDetails) {
	      return productService.updateProduct(id, productDetails);
	   }

	   @DeleteMapping("/{id}")
	   public ResponseEntity<?> deleteProduct(@PathVariable(value = "id") Long id) {
	      productService.deleteProduct(id);
	      return ResponseEntity.ok().build();
	   }
}
