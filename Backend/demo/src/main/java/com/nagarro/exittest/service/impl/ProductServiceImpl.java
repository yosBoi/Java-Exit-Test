package com.nagarro.exittest.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.exittest.model.Product;
import com.nagarro.exittest.repository.ProductRepository;
import com.nagarro.exittest.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public Product getProductDetailsByProductId(Long productId) {
		// TODO Auto-generated method stub
		//return null;
		
		return this.productRepository.findById(productId).orElse(null);
	}

	@Override
	public List<Product> searchProducts(String query) {
		// TODO Auto-generated method stub
		//return null;
		
		if(query != null) {
			return productRepository.findByKeyword(query);
		}
		else {
			return productRepository.findAll();
		}
	}

}
