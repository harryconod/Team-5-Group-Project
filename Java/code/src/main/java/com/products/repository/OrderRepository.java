package com.products.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.products.models.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{

	//create method to find by userId using join command
	//also need to get orders by order status
}
