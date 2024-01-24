package com.nagarro.exittest.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nagarro.exittest.model.User;
import com.nagarro.exittest.repository.UserRepository;
import com.nagarro.exittest.service.UserService;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		//return null;
		System.out.println("jjjjkkkk");
		System.out.println(user);
		
		//User newUser = new User(user.getUserId(), user.getFullName(), user.getPassword(), user.getEmail());
		
		return userRepository.save(user);
	}

	@Override
	public User getUser(String email, String password) {
		// TODO Auto-generated method stub
		//return null;
		
		return userRepository.findOneByEmailAndPassword(email, password);
	}
	
	@Override
	public boolean checkUser(String email) {
		User user = userRepository.findOneByEmail(email);
		
		if(user != null) {
			return true;
		}
		else {
			return false;
		}
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		User user = userRepository.findOneByEmail(username);
		if(user == null) {
			throw new UsernameNotFoundException("No user found");
		}
		return user;		
	}

}
