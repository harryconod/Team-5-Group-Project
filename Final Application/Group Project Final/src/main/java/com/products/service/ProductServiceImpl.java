package com.products.service;
/**
 * Implements product service, implementing the methods within
 * 
 * @author Harry Conod
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.*;
import com.products.models.Product;
import com.products.repository.ProductRepository;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	@Override
	public List<Product> getAllProducts(String searchTerm) {
		if (searchTerm != null) {
			return productRepository.searchForProduct(searchTerm);
		}
		return productRepository.findAll();
		
	}

	@Override
	public Product getProductById(int id) {
		return productRepository.findById(id).get();
	}

	@Override
	public Product addProduct(Product product) {
		product.setDateAdded(LocalDate.now());
		return productRepository.save(product);
	}
	
	@Override
	public void updateProduct(Product product) {
		productRepository.save(product);
	}
	
	@Override
	public List<Product> getProductsByCategory(String category) {
		return productRepository.findByProductCategory(category);
	}

	@Override
	public List<Product> getProductsByName(String name) {
		return productRepository.findByProductName(name);
	}

	@Override
	public void removeProduct(int id) {
		productRepository.deleteById(id);
		
	}
	
	
}
