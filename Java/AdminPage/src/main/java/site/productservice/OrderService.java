package com.isra_organics.productservice;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.isra_organics.entity.Order;
import com.isra_organics.repository.AdminOrderRepository;



@Service
public class OrderService {

	@Autowired
    private AdminOrderRepository orderRepository;
    
    public List<jakarta.persistence.criteria.Order> getAllOrders() {
        return orderRepository.findAll();
    }
    
    public List<jakarta.persistence.criteria.Order> getOrdersByStatus(String status) {
        return orderRepository.findByStatus(status);
    }
    
    public void updateOrderStatus(int orderId, String newStatus) {
        Order order = (Order) orderRepository.findById(orderId).orElse(null);
        if (order != null) {
            order.setStatus(newStatus);
            orderRepository.save(null);
        }
    }
}
