package com.products.repository;
/**
 * Creates repository extending functionality of JpaRepository to be applied to Orders and
 * provides additional method to be used in the service
 * 
*/
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.products.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	
	User findByEmail(String email);
}
