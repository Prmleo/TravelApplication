import { Component, OnInit } from '@angular/core';
import { MasterService } from'../services/master.service';
@Component({
  selector: 'app-portfolio-policies',
  templateUrl: './portfolio-policies.component.html',
  styleUrls: ['./portfolio-policies.component.css']
})
export class PortfolioPoliciesComponent implements OnInit {
  id:string="SaudiBroker";
  storeArray:any=[];
  constructor(private apiService:MasterService) { }

  ngOnInit() {this.getPortfolioPolices()
  }
  getPortfolioPolices():void{
    this.apiService.getPortfolioPolices(this.id).subscribe(resultArr=>this.storeArray=resultArr,
    error=>console.log("the Error is::"+error))
  }
  loadOutletRegistrationByName(SelectedName)
  {
    alert(SelectedName);
   for(var i=0;i<this.storeArray.length;i++)
   {
     if(SelectedName==this.storeArray[i].CUSTOMER_NAME)
     {
       alert("inner"+this.storeArray[i].CUSTOMER_NAME);
       this.storeArray[0]=this.storeArray[i];
       this.storeArray.length=1;
     }
    }
  }
}
