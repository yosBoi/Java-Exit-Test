package com.nagarro.exittest.controller;

import java.io.Console;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.util.StringBuilderFormattable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.exittest.model.Product;
import com.nagarro.exittest.model.ServiceReq;
import com.nagarro.exittest.model.ServiceRes;
import com.nagarro.exittest.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {

	private ProductService productService;

	public ProductController(ProductService productService) {
		super();
		this.productService = productService;
	}
	
//	@GetMapping("/search")
//	public String searchProducts(@RequestBody Map<String, Object> payload) {
//		
//		String query = payload.get("query").toString();
//		System.out.println(query);
//		List<Product> products = productService.searchProducts(query);
//		System.out.println(products);
//		//System.out.println(payload.get("query"));
//		return "done";
//	}
	
	@GetMapping("/search/{query}")
	public List<Product> searchProducts(@PathVariable("query") String query) {
		
		System.out.println(query);
		List<Product> products = productService.searchProducts(query);
		System.out.println(products);
		//System.out.println(payload.get("query"));
		return products;
	}
	
	@GetMapping("/details/{productId}")
	public Product getProductDetailsById(@PathVariable("productId") Long productId) {
		
		System.out.println(productId);
		Product product = productService.getProductDetailsByProductId(productId);
		System.out.println(product);
		
		return product;
		
	}
	
	@PostMapping("/serviceability")
	public ServiceRes getServiceability(@RequestBody ServiceReq reqData) {
		
		Product product = productService.getProductDetailsByProductId(reqData.id);
		//System.out.println(product.getDeliverablePincode());
		if(product.getDeliverablePincode().contains(reqData.pincode)) {
			//System.out.println("true");
			
			int days = Math.abs(reqData.pincode - product.getPincode()) + 1;
			//System.out.println("1");
			return (new ServiceRes(true, days));
			
		}else {
			//System.out.println("false");
			//System.out.println("2");
			return (new ServiceRes(false, -1));
		}
		
	}
	
}
