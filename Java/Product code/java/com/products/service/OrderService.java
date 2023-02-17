package com.products.service;

import com.products.models.Order;

public interface OrderService {

	public Iterable<Order> getAllOrders();
	
	public Order createOrder(Order order);
	
	public void update(Order order);
}
