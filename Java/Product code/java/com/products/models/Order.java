package com.products.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int order_id;
	
	@JsonFormat(pattern = "dd/mm/yyyy")
	private LocalDate dateOrdered;
	
	private String order_status;
	
	@OneToMany
	private List<OrderedProduct> orderedProducts = new ArrayList<>();
	
	@Transient
	public double getTotalOrderCost() {
		double total = 0;
		List<OrderedProduct> orderedProducts = getOrderedProducts();
		for (OrderedProduct op : orderedProducts) {
			total += op.getTotalCost();
		}
		return total;
	}
	
	public int getNumberOfProductsOrdered() {
		return this.orderedProducts.size();
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public LocalDate getDateOrdered() {
		return dateOrdered;
	}

	public void setDateOrdered(LocalDate dateOrdered) {
		this.dateOrdered = dateOrdered;
	}

	public String getOrder_status() {
		return order_status;
	}

	public void setOrder_status(String order_status) {
		this.order_status = order_status;
	}

	public List<OrderedProduct> getOrderedProducts() {
		return orderedProducts;
	}

	public void setOrderedProducts(List<OrderedProduct> orderedProducts) {
		this.orderedProducts = orderedProducts;
	}
	
	
}
