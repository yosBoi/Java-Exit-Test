import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public query: any;
  public products: any;

  public filteredProducts: any;

  public brands: Set<string> = new Set();

  public selectedBrands: Array<any> = new Array();

  // public minPrice:any;
  // public maxPrice:any;

  constructor(private service: ServicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.queryParamMap.get('query');
    // this.minPrice = this.route.snapshot.queryParamMap.get('min');
    // this.maxPrice = this.route.snapshot.queryParamMap.get('max');
    //console.log(this.query)
    //console.log(window.location.href)

    this.service.searchProducts(this.query).subscribe(
      (data) => {
        //console.log(data);
        
        this.products = data;

        for(let i=0; i<this.products.length; i++){
          this.brands.add(this.products[i].brand);
        }
        this.filteredProducts = this.products;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  // priceFilter(product:any){
  //   console.log(product);
  //   //console.log(this);
  //   return (product.price <= this.maxPrice && product.price >= this.minPrice);
  //   //return true;
  // }

  onCheckChange(event){
    //console.log(event.target.checked);
    if(event.target.checked){
      this.selectedBrands.push(event.target.value);
    }else{
      const index = this.selectedBrands.indexOf(event.target.value);
      this.selectedBrands.splice(index, 1);
    }

    console.log(this.selectedBrands);
  }

  filter(data){
    //window.location.href = `${window.location.href}&min=${data.minPrice}&max=${data.maxPrice}`;
    //this.products = [];
    //console.log(this.filteredProducts);
    //let q = this.products.filter(this.priceFilter, this);
    //this.products = q;
    //this.filteredProducts = [];

    //console.log(data);

    const isPriceFilter = data.minPrice != '' && data.maxPrice != '';
    const isBrandFilter = this.selectedBrands.length != 0;

    if(isPriceFilter && !isBrandFilter){
      this.filteredProducts = this.products.filter(product => {
        return (product.price <= data.maxPrice && product.price >= data.minPrice);
      })
    }
    else if(isBrandFilter && !isPriceFilter){
      this.filteredProducts = this.products.filter(product => {
        return (this.selectedBrands.includes(product.brand));
      })
    }
    else if(isPriceFilter && isBrandFilter){
      this.filteredProducts = this.products.filter(product => {
        return (product.price <= data.maxPrice && product.price >= data.minPrice && this.selectedBrands.includes(product.brand));
      })
    }
    else if(!isPriceFilter && !isBrandFilter){
      this.filteredProducts = this.products;
    }


    //this.products = filteredProducts;



  }

}
