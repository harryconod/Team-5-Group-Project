package com.products.repository;
/**
 * Creates repository extending functionality of JpaRepository to be applied to Orders and
 * provides additional methods to be used in the service, including custom database query to search
 * according to name and category
 * 
 * @author Harry Conod
 * 
*/
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;
import com.products.models.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	List<Product> findByProductCategory(String category);
	
	List<Product> findByProductName(String name);
	
	@Query("SELECT p FROM Product p WHERE CONCAT(p.productName, ' ', "
			+ "p.productCategory) LIKE %?1%")
    public List<Product> searchForProduct(String searchTerm);
	
}