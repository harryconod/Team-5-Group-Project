package com.products.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.products.models.Product;
import com.products.repository.ProductRepository;
import com.products.service.ProductService;

@Controller
public class AppController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("")
    public String viewHomePage() {
        return "index";
    }
	
	@GetMapping("/aboutUs")
	public String viewAboutUsPage() {
	    return "aboutus";
	}
	    
	@GetMapping("/Account")
	public String viewLoginForm(Model model) {
	    //model.addAttribute("user", new User());     
	    return "Account";
	}
	
	@GetMapping("/cart")
	public String viewCart() {
		return "cart";
	}
	
	@GetMapping("/Shop")
	public String viewShop(Model model) {
		List<Product> listProducts = productService.getAllProducts(null);
		model.addAttribute("listProducts", listProducts);
		for(int i=0; i<listProducts.size(); i++) {
			System.out.println(listProducts.get(i).getProduct_name());
		}
		return "Shop";
		
	}
	
	/*
	 * product info page:
	 * @GetMapping()
	 * public String viewProductInfo(Model model) {
	 * 
	 */
	
	@GetMapping("/register_product")
	public String showRegistrationForm(Model model) {
		model.addAttribute("product", new Product());
		
		return "product_registration_form";
	}
	
	@PostMapping("/process_product")
	public String processProduct(Product product) {
		productService.addProduct(product);
		
		return "register_success";
	}
	
	
}
