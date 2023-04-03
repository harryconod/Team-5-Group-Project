package com.products.service;
/**
 * Creates service interface for products
 * 
 * @author Harry Conod
*/
import com.products.models.Product;
import java.util.*;

public interface ProductService {
	
	public List<Product> getAllProducts(String searchTerm);
	
	public Product getProductById(int id);
	
	public List<Product> getProductsByCategory(String category);
	
	public List<Product> getProductsByName(String name);
	
	public Product addProduct(Product product);
	
	public void updateProduct(Product product);
	
	public void removeProduct(int id);

}
