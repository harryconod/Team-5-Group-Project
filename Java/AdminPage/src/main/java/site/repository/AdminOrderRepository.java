package com.isra_organics.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import jakarta.persistence.criteria.Order;

@Repository
public interface AdminOrderRepository extends JpaRepository<Order, Integer> {
	 List<Order> findByStatus(String status);

	List<Order> findAll();
}
