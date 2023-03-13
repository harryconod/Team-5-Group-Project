package com.products.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import com.products.models.Order;
import com.products.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

	@Autowired
	OrderService orderService;
	
	
	public OrderController() {
		
	}
	
	@GetMapping(value = { "", "/" })
	public @NonNull Iterable<Order> getOrders(){
		return orderService.getAllOrders();
	}
	
	//@PostMapping
	//Code for adding order to database
}
