package com.products.models;

/**
 * Creates OrderItem entity in the database which can be used by the rest of the code,
 * links product id and number ordered to an order when it is placed with ManyToOne relation
 * 
 * @author  Harry Conod and Suraj Malayudacherevil Ravi
*/


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orderedItems")
public class OrderItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonIgnore
	private Integer cartItemId;
	
	@ManyToOne(fetch = FetchType.LAZY, targetEntity = Order.class)
	@JoinColumn(name = "order_id", referencedColumnName = "orderId",
				insertable = true, updatable = false)
	private Order order;
	
	private String userEmail;
	
	private int productId;
	private double price;
	private int quantity;
	
	public OrderItem() {
	}
	
	public OrderItem(int productId, int quantity, double price) {
		this.productId = productId;
		this.quantity = quantity;
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
}
