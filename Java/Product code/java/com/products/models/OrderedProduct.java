package com.products.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class OrderedProduct {

	@EmbeddedId
	@JsonIgnore
	private OrderedProductPK pk;
	
	@Column
	private int quantity;

	public OrderedProduct(Order order, Product product, int quantity) {
		pk = new OrderedProductPK();
		pk.setOrder(order);
		pk.setProduct(product);
		this.quantity = quantity;
	}
	
	@Transient
	public Product getProduct() {
		return this.pk.getProduct();
	}
	
	@Transient
	public double getTotalCost() {
		return getProduct().getProduct_price() * getQuantity();
	}

	public OrderedProductPK getPk() {
		return pk;
	}

	public void setPk(OrderedProductPK pk) {
		this.pk = pk;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public boolean equals(OrderedProduct orderedproduct) {
		return this.equals(orderedproduct);
	}
	
}
