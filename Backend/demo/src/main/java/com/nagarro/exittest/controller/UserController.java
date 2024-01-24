package com.nagarro.exittest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.exittest.model.User;
import com.nagarro.exittest.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	private UserService userService;
	
	@Autowired
	private	BCryptPasswordEncoder passwordEncoder;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	
	
//	@PostMapping("/register")
//	public String registerUserAccount(@ModelAttribute("user") User newUser) {
//		userService.addUser(newUser);
//		return "redirect:/registration?success";
//	}
	
	@PostMapping("/register")
	public User registerUserAccount(@RequestBody User newUser) throws Exception{
		System.out.println(newUser);
		
//		if(userService.checkUser(newUser.getEmail())) {
//			System.out.println("already exist");
//		}
//		else {
//			//System.out.println("new user");
//			newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
//			userService.addUser(newUser);
//		}
		
		try {
			newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
			return userService.addUser(newUser);
		} catch (Exception e) {
			throw new Exception("User with email " + newUser.getEmail() + " already exists!!");
		}
		
		
	}
	
//	@GetMapping("/test")
//	public String testFunc() {
//		System.out.println("asd");
//		return "Test Return";
//	}
	
}
