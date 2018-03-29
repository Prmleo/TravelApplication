import { Component, OnInit } from '@angular/core';
import { MasterService } from'../services/master.service';
@Component({
  selector: 'app-portfolio-cancelled-policy',
  templateUrl: './portfolio-cancelled-policy.component.html',
  styleUrls: ['./portfolio-cancelled-policy.component.css']
})
export class PortfolioCancelledPolicyComponent implements OnInit {
  id:string="SaudiBroker";
  storeArray:any=[];
  constructor(private apiService:MasterService) { }

  ngOnInit() {
    this.getCancelledPolicy();
  }
  getCancelledPolicy():void{
    this.apiService.getCancelledPolicy(this.id).subscribe(resultArr=>this.storeArray=resultArr,
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
