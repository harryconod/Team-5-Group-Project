package com.products.models;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;

	private String productName;
	
	private String productBrand;
	
	private double productPrice;
	
	private String productImgURL;
	
	private String productCategory;
	
	private String productDesc;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dateAdded;
	
	
	private int stockLevel;
	
	public Product() {
		super();
	}

	public Product(String product_name, String product_model, double product_price,
			String product_imgURL, String product_category, String product_description, int product_stock) {
		this.productName = product_name;
		this.productBrand = product_model;
		this.productPrice = product_price;
		this.productImgURL = product_imgURL;
		this.productCategory = product_category;
		this.productDesc = product_description; 
		this.stockLevel = product_stock;
		this.dateAdded = LocalDate.now();
		
	}

	public int getProduct_id() {
		return productId;
	}

	public void setProduct_id(int product_id) {
		this.productId = product_id;
	}

	public String getProduct_name() {
		return productName;
	}

	public void setProduct_name(String product_name) {
		this.productName = product_name;
	}

	public String getProduct_model() {
		return productBrand;
	}

	public void setProduct_model(String product_model) {
		this.productBrand = product_model;
	}

	public double getProduct_price() {
		return productPrice;
	}

	public void setProduct_price(double product_price) {
		this.productPrice = product_price;
	}

	public String getProduct_imgURL() {
		return productImgURL;
	}

	public void setProduct_imgURL(String product_imgURL) {
		this.productImgURL = product_imgURL;
	}

	public String getCategory() {
		return productCategory;
	}

	public void setCategory(String category) {
		this.productCategory = category;
	}

	public String getProductDesc() {
		return productDesc;
	}

	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}

	public int getStockLevel() {
		return stockLevel;
	}

	public void setStockLevel(int stockLevel) {
		this.stockLevel = stockLevel;
	}
	
}
