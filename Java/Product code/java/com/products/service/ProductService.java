package com.products.service;

import com.products.models.Product;

public interface ProductService {
	
	public Iterable<Product> getAllProducts();
	
	public Product getProduct(int id);
	
	public Product addProduct(Product product);
	
	public void updateProduct(Product product);

}
