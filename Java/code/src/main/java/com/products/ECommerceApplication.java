package com.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.products.models.Product;
import com.products.service.ProductService;

@SpringBootApplication
public class ECommerceApplication implements CommandLineRunner	{

	public static void main(String[] args) {
		SpringApplication.run(ECommerceApplication.class, args);
	}
	
	@Autowired
	ProductService productService;
	@Override
	public void run(String... args) throws Exception {
		//implement loop to read txt file to add all products to database
		//just basic example as test product atm
		productService.addProduct(new Product("Moisturizing Cream", "Isra's Own", 19.99, "Moisturizing-cream-bs.png", "Moisturizer", "a moisturizer", 10));
		productService.addProduct(new Product("super soap", "Head and Shoulders", 29.99, "soap.png", "Soap", "some soap", 15));
		productService.addProduct(new Product("soapyness", "Dove", 15.99, "soap.png", "Soap", "cheap soap", 25));
		productService.addProduct(new Product("xyz", "Loreal", 15.99, "xyz.png", "Moisturizer", "generic moisturizer", 10));
		productService.addProduct(new Product("Shower gel", "Dove", 6.99, "showergel.png", "Shower Gel", "some shower gel", 30));

		//productService.getProductsByCategory("Soap").forEach(System.out::println);
		//productService.getProductsByCategory("Soap").forEach(x -> System.out.println(x.getProduct_name()));
		//System.out.println(productService.getAllProducts());
		//System.out.println(productService.getProductsByCategory("Soap"));
		/*productService.getAllProducts(null).forEach(x -> System.out.println(x.getProduct_name()));;
		System.out.println();
		productService.getAllProducts("moist").forEach(x -> System.out.println(x.getProduct_name()));;
		*/
	}
	
	

}
