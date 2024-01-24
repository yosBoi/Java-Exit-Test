package com.nagarro.exittest.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nagarro.exittest.model.Product;

@Service
public interface ProductService {
	
	public Product getProductDetailsByProductId(Long productId);
	
	public List<Product> searchProducts(String query);
	
}
