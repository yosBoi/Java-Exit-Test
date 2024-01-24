package com.nagarro.exittest.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {

	@Id
	private Long productId;
	
	String name;//
	String productCode;
	String brand;//
	String imgLink;//
	String description;//
	int pincode;
	int price;//
	
	@ElementCollection
	private List<Integer> deliverablePincode = new ArrayList<>();
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}




	public List<Integer> getDeliverablePincode() {
		return deliverablePincode;
	}




	public void setDeliverablePincode(List<Integer> deliverablePincode) {
		this.deliverablePincode = deliverablePincode;
	}




	



	public Product(Long productId, String name, String productCode, String brand, String imgLink, String description,
			int pincode, int price, List<Integer> deliverablePincode) {
		super();
		this.productId = productId;
		this.name = name;
		this.productCode = productCode;
		this.brand = brand;
		this.imgLink = imgLink;
		this.description = description;
		this.pincode = pincode;
		this.price = price;
		this.deliverablePincode = deliverablePincode;
	}




	public String getImgLink() {
		return imgLink;
	}

	public void setImgLink(String imgLink) {
		this.imgLink = imgLink;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public int getPrice() {
		return price;
	}




	public void setPrice(int price) {
		this.price = price;
	}




	@Override
	public String toString() {
		return "Product [productId=" + productId + ", name=" + name + ", productCode=" + productCode + ", brand="
				+ brand + ", imgLink=" + imgLink + ", description=" + description + ", pincode=" + pincode + "]";
	}
	
	
	
}
