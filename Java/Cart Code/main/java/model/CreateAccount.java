package com.isra_organics.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CreateAccount {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String first_name;
	private String last_name;
	private String emailid;
	private String user_password;
	public CreateAccount(int id, String first_name, String last_name, String emailid, String user_password) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.emailid = emailid;
		this.user_password = user_password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getUser_password() {
		return user_password;
	}
	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}
	
	
}
