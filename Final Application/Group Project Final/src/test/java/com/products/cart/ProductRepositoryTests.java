package com.products.cart;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.products.models.Product;
import com.products.repository.ProductRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ProductRepositoryTests {
	
	@Autowired
	private TestEntityManager entityManager;
	
	@Autowired
	private ProductRepository productRepository;
	
	/*
	 * To test that when a product is added to the database, that same product is returned when searching
	 * by its name using the ProductRepository
	 */
	@Test
	public void whenFindByProductName_thenReturnProduct() {
		// given
	    Product soap = new Product("soap", 10, "Soap.png", "category", "test description", 5);
	    entityManager.persistAndFlush(soap);
	    List<Product> products = new ArrayList<Product>();
	    
	    // when
	    products = productRepository.findByProductName(soap.getProduct_name());

	    // then
	    assertThat(products.get(0).getProduct_name())
	      .isEqualTo(soap.getProduct_name());
	}
	
}
