package com.nagarro.exittest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.exittest.model.User;



public interface UserRepository extends JpaRepository<User, Long>{

	public User findOneByEmailAndPassword(String email, String password);
	
	public User findOneByEmail(String email);
}
