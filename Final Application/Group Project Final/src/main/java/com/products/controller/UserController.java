package com.products.controller;

/**
 * Provides needed rest controller to access the users in the database, to create new users and check
 * values in the database to facilitate login
 * 
 * @author  Harry Conod
*/

import java.rmi.ServerException;
import java.util.Collections;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.products.models.User;
import com.products.models.UserRole;
import com.products.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	@Autowired
	UserService userService;
	
	@GetMapping(value = { "", "/" })
	public @NonNull Iterable<User> getUsers(){
		return userService.getAllUsers();
	}
	
	@PostMapping(path = "/register",
			consumes = "application/json", 
	        produces = "application/json")
		public ResponseEntity<User> register(@RequestBody User newUser) throws ServerException{
		    if (newUser == null)
		    	throw new ServerException("Invalid user details");
		    else {
		    String encodedPassword = passwordEncoder.encode(newUser.getPassword());
		    newUser.setPassword(encodedPassword);
		    userService.addUser(newUser);
		    return new ResponseEntity<>(newUser, HttpStatus.CREATED);
	    }
	}
	
	
	@GetMapping("/checkEmail")
	@ResponseBody
	public Iterable<User> searchProducts(@RequestParam String email) throws ServerException{
		if (Collections.singleton(userService.findByEmail(email)) == null)
			throw new ServerException("User already exists");
		else
			return Collections.singleton(userService.findByEmail(email));
	}
	
	@GetMapping("/checkAdmin")
	@ResponseBody
	public Set<User> checkAdmin(@RequestParam String email){
		User user = userService.findByEmail(email);
		if (user.getApplicationUserRole() == UserRole.ADMIN) {
			return Collections.singleton(user);
		}else
			return null;
	}
	
	@GetMapping("/login")
	@ResponseBody
	public Set<User> checkDetails(@RequestParam String email, @RequestParam String password){
		User user = userService.findByEmail(email);
		boolean userPasswordCheck = passwordEncoder.matches(password, user.getPassword());
		if (!userPasswordCheck || !user.getEnabled() || user.getLocked()) {
			return null;
		}
		else
			return Collections.singleton(user);
	}
	
	@GetMapping("/lock")
	@ResponseBody
	public void lockAccount(@RequestParam String email) {
		User user =userService.findByEmail(email);
		user.setLocked(true);
	}
}
