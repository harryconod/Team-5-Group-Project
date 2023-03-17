package com.products.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
@Table(name = "shoppingorder")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int order_id;
	
	@JsonFormat(pattern = "dd/mm/yyyy")
	private LocalDate dateOrdered;
	
	private String order_status;
	
	//private int custId;
	
	@OneToMany
	private List<SelectedProduct> selectedProducts = new ArrayList<>();
	
	@Transient
	public double getTotalOrderCost() {
		double total = 0;
		List<SelectedProduct> selectedProducts = getOrderedProducts();
		for (SelectedProduct op : selectedProducts) {
			total += op.getTotalCost();
		}
		return total;
	}
	
	public int getNumberOfProductsOrdered() {
		return this.selectedProducts.size();
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

	public List<SelectedProduct> getOrderedProducts() {
		return selectedProducts;
	}

	public void setOrderedProducts(List<SelectedProduct> selectedProducts) {
		this.selectedProducts = selectedProducts;
	}
	
	
}
