package com.nagarro.exittest.model;

public class ServiceRes {

	public boolean deliverable;
	public int days;
	public boolean isDeliverable() {
		return deliverable;
	}
	public void setDeliverable(boolean deliverable) {
		this.deliverable = deliverable;
	}
	public int getDays() {
		return days;
	}
	public void setDays(int days) {
		this.days = days;
	}
	public ServiceRes(boolean deliverable, int days) {
		super();
		this.deliverable = deliverable;
		this.days = days;
	}
	public ServiceRes() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
