package com.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.products.models.Product;
import com.products.service.ProductService;

@SpringBootApplication
public class CartApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CartApplication.class, args);
	}
	@Autowired
	ProductService productService;
	@Override
	public void run(String... args) throws Exception {
		//implement loop to read txt file to add all products to database
		//just basic example as test product atm
		Product product = new Product("Soap", "Dove", 19.99, "image.png");
		productService.addProduct(product);
		
	}
	
	
	

}
