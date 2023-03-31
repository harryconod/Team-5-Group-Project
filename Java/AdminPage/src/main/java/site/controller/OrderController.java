package com.isra_organics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.isra_organics.productservice.OrderService;

import jakarta.persistence.criteria.Order;

@RestController
@RequestMapping("/admin/orders")
public class OrderController {
	
	@Autowired
    private OrderService orderService;
    
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }
    
    @GetMapping("/status/{status}")
    public List<Order> getOrdersByStatus(@PathVariable String status) {
        return orderService.getOrdersByStatus(status);
    }
    
    @PutMapping("/{orderId}")
    public void updateOrderStatus(@PathVariable int orderId, @RequestParam String newStatus) {
        orderService.updateOrderStatus(orderId, newStatus);
    }

}
