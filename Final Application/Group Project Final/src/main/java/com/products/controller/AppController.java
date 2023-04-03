package com.products.controller;

/**
 * Provides mappings for the html files
 * 
 * @author  Harry Conod
*/

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {
	
	@GetMapping("")
    public String viewHomePage() {
        return "index";
    }
	
	@GetMapping("/index")
    public String viewNewIndex() {
        return "index_backup2";
    }
	
	@GetMapping("/AboutUs")
	public String viewAboutUsPage() {
	    return "aboutus";
	}
	    
	@GetMapping("/Account")
	public String viewLoginForm(Model model) {     
	    return "Account";
	}
	
	@GetMapping("/cart")
	public String viewCart() {
		return "cart";
	}
	
	@RequestMapping("/Shop")
	public String viewShop(Model model, @Param("keyword") String keyword) {	
		return "Shop";
	}
	
	@GetMapping("/Adminpage")
	public String viewAdmin() {
		return "Adminpage";
	}
	
	@GetMapping("test1")
	public String test() {
		return "test1";
	}
	
	@GetMapping("Catalog")
	public String catalog() {
		return "Catalog";
	}
	
	@GetMapping("Orders")
	public String orders() {
		return "Orders";
	}
	
	@GetMapping("AdminAccount")
	public String adminAccount() {
		return "AdminAccount";
	}
	
	
}
