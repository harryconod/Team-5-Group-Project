package com.products;

/**
 * Provides the main method required to launch the Spring Boot Applicaton and makes use of CommandLineRunner
 * to automatically register initial products and users in the database  
 * 
 * @author  Harry Conod
*/

import java.io.File;
import java.util.Scanner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.products.models.User;
import com.products.models.UserRole;
import com.products.models.Product;
import com.products.service.ProductService;
import com.products.service.UserService;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class ECommerceApplication implements CommandLineRunner	{

	public static void main(String[] args) {
		SpringApplication.run(ECommerceApplication.class, args);
	}
	
	@Autowired
	ProductService productService;
	
	@Autowired
	UserService userService;
	
	@Override
	public void run(String... args) throws Exception {
		/**
		 * Method to add initial products set to database, should be commented out once the program has
		 * been run for the first time and when "spring.jpa.hibernate.ddl-auto=create" is set to
		 * "spring.jpa.hibernate.ddl-auto=none" in application.properties, as otherwise duplicate instances
		 * will be created
		 */
		try (Scanner scan = new Scanner(new File("productList.txt"))) {
			while (scan.hasNextLine()) {
				String data = scan.nextLine();
				String[] attributes = data.split(";");
				if(attributes.length == 6) {
					productService.addProduct(new Product(attributes[0], Integer.parseInt(attributes[1]),
							"img/" + attributes[2], attributes[3], attributes[4], 
							Integer.parseInt(attributes[5])));
				}
			}
		}
		/**
		 * Tests to check that adding the products and a test user successfully completed and the objects
		 * can be retrieved successfully
		 */
		//creates admin
		User admin = new User("Harry Conod", "harryconod@gmail.com", "Password12345!",
				UserRole.ADMIN);
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(admin.getPassword());
        admin.setPassword(encodedPassword);
        
        userService.addAdmin(admin);
        
        User user = new User("John Smith", "jsmith@gmail.com", "Testing54321!",
				UserRole.USER);
        userService.addUser(user);
        
        //System.out.println(userService.findByEmail("email@email.com").getName());
        //System.out.println(productService.getProductsByName("Aloe Shampoo Bar").toString());
	}
}
