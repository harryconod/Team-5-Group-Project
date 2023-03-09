package com.products.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

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
	public String viewShop() {
		return "Shop";
	}
}
