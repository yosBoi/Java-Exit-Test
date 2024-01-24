import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productId: any;
  public product: any;

  constructor(private service: ServicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.productId = this.route.snapshot.queryParamMap.get('id');
    console.log(this.productId);

    this.service.getProductDetails(this.productId).subscribe(
      data => {
        //console.log(data);
        this.product = data;
      },
      err => {
        console.log(err);
      }
    )

  }

  serviceability(data:any){
    //console.log(data)
    if(data.pincode == ''){
      alert("please enter pincode");
      return;
    }

    let reqData = {
      "id": this.productId,
      "pincode": data.pincode
    }

    this.service.getServiceability(reqData).subscribe(
      (data: any) => {
        //console.log(data);
        if(data.deliverable){
          alert(`Can be delivered in ${data.days} days`);
        }else{
          alert(`Cannot be delivered!`);
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
