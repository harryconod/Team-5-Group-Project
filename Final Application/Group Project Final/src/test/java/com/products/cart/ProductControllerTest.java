package com.products.cart;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.products.controller.ProductController;
import com.products.models.Product;
import com.products.service.ProductService;
/*
@RunWith(SpringRunner.class)
@WebMvcTest(ProductController.class)
public class ProductControllerTest {
	

	    @Autowired
	    private MockMvc mvc;

	    @MockBean
	    private ProductService service;
	    
	    @SuppressWarnings("unchecked")
	    @Test
	    public void givenProducts_whenGetProducts_thenReturnJsonArray()
	      throws Exception {
	        
	        Product testProduct = new Product("soap", 10, "Soap.png", "category", "test description", 5);

	        List<Product> allProducts = Arrays.asList(testProduct);

	        given(service.getAllProducts(null)).willReturn(allProducts);

	        mvc.perform(get("/api/employees")
	          .contentType(MediaType.APPLICATION_JSON))
	          .andExpect(status().isOk())
	          .andExpect(jsonPath("$", hasSize(1)))
	          .andExpect(jsonPath("$[0].name", is(testProduct.getProduct_name())));
	    }
	
}*/
