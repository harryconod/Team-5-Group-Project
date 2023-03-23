package com.isra_organics;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.isra_organics.cart.repository.CartItemRepository;
import com.isra_organics.model.CartItem;
import com.isra_organics.model.Customer;
import com.isra_organics.model.Product;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class CartTest {

	@Autowired
	private CartItemRepository cartrepo;
	
	@Autowired
	private TestEntityManager entitymanager;
	
	@Test
	public void testAddOneCartItem() {
		entitymanager.find(Product.class, primarykey);//should mention product at class and product id in place of primary key
		entitymanager.find(Customer.class, primarykey);//should mention customer at class and customer id in place of primary key
		
		CartItem newItem = new CartItem();
		Customer Customer;
		newItem.setCustomer(Customer);
		Product Product;
		newItem.setProduct(Product);
		newItem.setQuantity(1);
		
		 CartItem savedCartItem = cartrepo.save(newItem);
		 assertTrue(savedCartItem.getId() > 0);
	}
}
