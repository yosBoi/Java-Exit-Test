package com.nagarro.exittest.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.nagarro.exittest.model.User;

@Service
public interface UserService extends UserDetailsService{

	public User addUser(User user);
	
	public User getUser(String email, String password);
	
	public boolean checkUser(String email);
	
}
