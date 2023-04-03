package com.products.service;
/**
 * Implements user service, implementing the methods within
 * 
 * @author Harry Conod and Isra Shire
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.products.models.User;
import com.products.models.UserRole;
import com.products.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User addUser(User user) {
		user.setEnabled(true);
		user.setLocked(false);
		user.setApplicationUserRole(UserRole.USER);
		return userRepo.save(user);
	}

	@Override
	public User findByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	@Override
	public Iterable<User> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User addAdmin(User user) {
		user.setEnabled(true);
		user.setLocked(false);
		user.setApplicationUserRole(UserRole.ADMIN);
		return userRepo.save(user);
	}

}
