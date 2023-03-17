package com.products.service;

import java.util.List;

import com.products.models.Order;
import com.products.models.Product;

public interface OrderService {

	public Iterable<Order> getAllOrders();
	
	public Order createOrder(Order order);
	
	public void update(Order order);
	
	public List<Order> getOrdersByUserId(int userId);
}
