import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent implements OnInit {
  Quantity:number=0;
  i=0;
     addQty(){
         this.i++;
         this.Quantity=this.i;
       
     }


     Qty:number=0;
     t=0;
     color:boolean=true;
     minus(){
      if(this.t !=0){
        this.t--;
        this.Qty=this.t;
      }
      if(this.t==0){
       this.color=true;
      }
     
     }

     plus(){
      if(this.t !=10){
        this.t++;
        this.Qty=this.t;
      }
      if(this.t!=0){
        this.color=false;
       }

    }




  constructor() { }

  ngOnInit(): void {
  }

}
