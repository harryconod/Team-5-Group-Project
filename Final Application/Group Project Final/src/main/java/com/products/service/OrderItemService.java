package com.products.service;
/**
 * Creates service for order item objects, creating an autowired instance of the repository to be used
 * and implementing additional methods 
 * 
 * @author Harry Conod and Suraj Malayudacherevil Ravi
*/
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.products.models.OrderItem;
import com.products.repository.OrderItemRepository;
import com.products.repository.ProductRepository;

@Service
@Transactional
public class OrderItemService {
	@Autowired
	private OrderItemRepository cartItemsRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	public void addOrderedProducts(OrderItem orderItem) {
		cartItemsRepository.save(orderItem);
	}
	
	public double getTotalPrice(List<OrderItem> orderItems) {
		int totalPrice = 0;
		for (OrderItem o : orderItems) {
			totalPrice += productRepository.getById(o.getProductId()).getProduct_price() * (double)o.getQuantity();
		}
		return totalPrice;
	}
}
