package com.products.service;
/**
 * Creates service interface for orders
*/
import java.util.List;

import com.products.models.Order;

public interface OrderService {

	public Iterable<Order> getAllOrders();
	
	public Order createOrder(Order order);
	
	public void update(Order order);
	
	public List<Order> getOrdersByUserId(int userId);
}
