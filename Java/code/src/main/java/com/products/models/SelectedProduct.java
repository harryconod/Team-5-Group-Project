package com.products.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class SelectedProduct {

	@EmbeddedId
	@JsonIgnore
	private SelectedProductPK pk;
	
	@Column
	private int quantity;

	public SelectedProduct() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SelectedProduct(Order order, Product product, int quantity) {
		pk = new SelectedProductPK();
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

	public SelectedProductPK getPk() {
		return pk;
	}

	public void setPk(SelectedProductPK pk) {
		this.pk = pk;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public boolean equals(SelectedProduct orderedproduct) {
		return this.equals(orderedproduct);
	}
	
}
