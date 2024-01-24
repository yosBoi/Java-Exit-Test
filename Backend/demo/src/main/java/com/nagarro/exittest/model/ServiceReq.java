package com.nagarro.exittest.model;

public class ServiceReq {

	public long id;
	public int pincode;
	public ServiceReq(long id, int pincode) {
		super();
		this.id = id;
		this.pincode = pincode;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public ServiceReq() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
