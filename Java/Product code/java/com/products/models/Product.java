package com.products.models;

import jakarta.persistence.*;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int product_id;
	
	private String product_name;
	
	private String product_model;
	
	private double product_price;
	
	private String product_imgURL;
	
	private Category category;

	public Product(String product_name, String product_model, double product_price,
			String product_imgURL) {
		this.product_name = product_name;
		this.product_model = product_model;
		this.product_price = product_price;
		this.product_imgURL = product_imgURL;
		this.category = category;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getProduct_model() {
		return product_model;
	}

	public void setProduct_model(String product_model) {
		this.product_model = product_model;
	}

	public double getProduct_price() {
		return product_price;
	}

	public void setProduct_price(double product_price) {
		this.product_price = product_price;
	}

	public String getProduct_imgURL() {
		return product_imgURL;
	}

	public void setProduct_imgURL(String product_imgURL) {
		this.product_imgURL = product_imgURL;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
	
	
	
}
