package com.products.service;
/**
 * Implements order service, implementing the methods within
 * 
 * @author Harry Conod
*/
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.products.models.Order;
import com.products.models.OrderItem;
import com.products.repository.OrderItemRepository;
import com.products.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrderRepository orderRepository;
	
	@Autowired
	OrderItemRepository orderItemRepository;
	
	@Override
	public Iterable<Order> getAllOrders() {
		return this.orderRepository.findAll();
	}

	@Override
	public Order createOrder(Order order) {
		List<OrderItem> orderedItems = order.getOrderedItems();
		double totalPrice = 0;
		for (OrderItem o : orderedItems) {
			o.setUserEmail(order.getUserEmail());
		}
		for (OrderItem o : orderedItems) {
			totalPrice += o.getPrice() * (double)o.getQuantity();
		}
		order.setTotalCost(totalPrice);
		//order.setDateOrdered(LocalDate.now());
		return this.orderRepository.save(order);

	}

	@Override
	public void update(Order order) {
		this.orderRepository.save(order);

	}

	@Override
	public List<Order> getOrdersByUserId(int userId) {
		// TODO Auto-generated method stub
		return null;
	}

}
