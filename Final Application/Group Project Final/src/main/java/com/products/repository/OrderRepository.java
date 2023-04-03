package com.products.repository;
/**
 * Creates repository extending functionality of JpaRepository to be applied to Orders and
 * provides additional method to be used in the service
 * 
*/
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.products.models.Order;
import com.products.models.Product;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer>{

	List<Order> findAllByUserEmailOrderByDateOrdered(String email);
	
}
