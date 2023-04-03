package com.products.controller;

/**
 * Provides needed rest controller to access the orders in the database, to add and find them
 * 
 * @author  Harry Conod
*/

import java.rmi.ServerException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
	@PostMapping("/newOrder")
	public Order newOrder(@RequestBody Order newOrder) {
		return orderService.createOrder(newOrder);
	}
	
	@PostMapping(path = "addOrder",
	        consumes = "application/json", 
	        produces = "application/json")
	public ResponseEntity<Order> create(@RequestBody Order newOrder) throws ServerException {
	    Order order = orderService.createOrder(newOrder);
	    if (order == null) {
	        throw new ServerException("No order");
	    } else {
	        return new ResponseEntity<>(order, HttpStatus.CREATED);
	    }
	}
}
