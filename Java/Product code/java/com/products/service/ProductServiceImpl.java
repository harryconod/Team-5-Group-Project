package com.products.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.products.models.Product;
import com.products.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	@Override
	public Iterable<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@Override
	public Product getProduct(int id) {
		return productRepository.findById(id).get();
	}

	@Override
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}
	
	@Override
	public void updateProduct(Product product) {
		productRepository.save(product);
	}

}
