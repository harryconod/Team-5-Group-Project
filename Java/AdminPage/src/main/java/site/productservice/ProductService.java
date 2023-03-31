package com.isra_organics.productservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isra_organics.repository.AdminProductsRepository;
import com.isra_organics.repository.Product;

@Service
public class ProductService {

	@Autowired
	   private AdminProductsRepository productRepository;

	   public List<Product> getAllProducts() {
	      return productRepository.findAll();
	   }

	   public Product getProductById(Long id) {
		    return productRepository.findById(id)
		        .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
		}

	   public Product createProduct(Product product) {
	      return productRepository.save(product);
	   }

	   public Product updateProduct(Long id, Product productDetails) {
	      Product product = getProductById(id);

	      product.setProduct_name(productDetails.getProduct_name());
	      product.setDescription(productDetails.getDescription());
	      product.setProduct_price(productDetails.getProduct_price());
	      product.setStock(productDetails.getProduct_stock());
	      product.setCategory(productDetails.getCategory());
	      product.setProduct_imgURL(productDetails.getProduct_imgURL());

	      return productRepository.save(product);
	   }

	   public void deleteProduct(Long id) {
	      productRepository.deleteById(id);
	   }
}

