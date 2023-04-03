package com.products.repository;

/**
 * Creates repository extending functionality of JpaRepository to be applied to Order Items
 * 
*/

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.products.models.OrderItem;


@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Integer>{

}
