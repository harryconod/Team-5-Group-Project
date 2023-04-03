package com.products.models;

/**
 * Creates product entity in the database which can be used by the rest of the code, populates the shop
 * page and allows for products to be selected to be ordered
 * 
 * @author  Harry Conod
*/


import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;

	private String productName;
	
	private double productPrice;
	
	private String productImgUrl;
	
	private String productCategory;
	
	@Column(length = 1000)
	private String productDesc;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dateAdded;
	
	
	private int stockLevel;
	
	public Product() {
		super();
	}

	public Product(String product_name, double product_price,
			String product_imgURL, String product_category, String product_description, int product_stock) {
		this.productName = product_name;
		this.productPrice = product_price;
		this.productImgUrl = product_imgURL;
		this.productCategory = product_category;
		this.productDesc = product_description; 
		this.stockLevel = product_stock;
		this.dateAdded = LocalDate.now();
		
	}

	public int getProduct_id() {
		return productId;
	}
	
	@JsonProperty("id")
	public void setProduct_id(int product_id) {
		this.productId = product_id;
	}

	public String getProduct_name() {
		return productName;
	}

	@JsonProperty("name")
	public void setProduct_name(String product_name) {
		this.productName = product_name;
	}

	public double getProduct_price() {
		return productPrice;
	}

	@JsonProperty("price")
	public void setProduct_price(double product_price) {
		this.productPrice = product_price;
	}

	public String getProduct_imgURL() {
		return productImgUrl;
	}

	@JsonProperty("img")
	public void setProduct_imgURL(String product_imgURL) {
		this.productImgUrl = product_imgURL;
	}

	public String getCategory() {
		return productCategory;
	}

	@JsonProperty("category")
	public void setCategory(String category) {
		this.productCategory = category;
	}

	public String getProductDesc() {
		return productDesc;
	}

	@JsonProperty("desc")
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}

	public int getStockLevel() {
		return stockLevel;
	}

	@JsonProperty("stock")
	public void setStockLevel(int stockLevel) {
		this.stockLevel = stockLevel;
	}

	public LocalDate getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(LocalDate dateAdded) {
		this.dateAdded = dateAdded;
	}
	
}
