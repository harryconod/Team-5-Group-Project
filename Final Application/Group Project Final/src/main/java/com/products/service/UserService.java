package com.products.service;
/**
 * Creates service interface for users
 * 
 * 
*/
import com.products.models.User;

public interface UserService {
	
	public User addUser(User user);
	
	public User addAdmin(User user);

	public User findByEmail(String email);

	public Iterable<User> getAllUsers();
}
