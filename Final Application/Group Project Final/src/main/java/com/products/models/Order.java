package com.products.models;

/**
 * Creates order entity in the database which can be used by the rest of the code, registered in the 
 * database when an order is placed and can be displayed in admin page
 * 
 * @author  Harry Conod
*/

import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

@Entity
@Table(name = "shoppingorder")
public class Order {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderId;
	
	private String userEmail;
	
	@OneToMany(mappedBy="order", cascade = CascadeType.ALL,orphanRemoval = true)
	private List<OrderItem> orderedItems;
	
	@JsonFormat(pattern = "dd/mm/yyyy")
	private String dateOrdered;
	private double totalCost;
	private String address;
	private String phoneNumber;
	private String userName;
	
	public Order() {
	}
	public Order(String email, List<OrderItem> orderedItems, String address, String phoneNumber) {
		this.userEmail = email;
		this.orderedItems = orderedItems;
		int totalPrice = 0;
		for (OrderItem o : orderedItems) {
			totalPrice += o.getPrice() * (double)o.getQuantity();
		}
		this.totalCost = totalPrice;
		this.address = address;
		this.phoneNumber = phoneNumber;
	}
	
	public int getOrderId() {
		return orderId;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public List<OrderItem> getOrderedItems() {
		return orderedItems;
	}
	public void setOrderedItems(List<OrderItem> orderedItems) {
		this.orderedItems = orderedItems;
	}
	public String getDateOrdered() {
		return dateOrdered;
	}
	public void setDateOrdered(String dateOrdered) {
		this.dateOrdered = dateOrdered;
	}
	public double getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}
