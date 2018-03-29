import { Component, OnInit } from '@angular/core';
import{MasterService}from '../services/master.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  storeArray:any=[];
  constructor(private apiService:MasterService) { }

  ngOnInit() {
  }
  getCustomerReport(startDate,EndDate,brokerType):void{
    alert("im the report "+startDate+EndDate+brokerType)
    let first=document.getElementById("frst");
    first.hidden=true;
    let scnd=document.getElementById("mainForm");
    scnd.hidden=false;
    this.apiService.getCustomerReport(startDate,EndDate,brokerType).subscribe(resultArr=>this.storeArray=resultArr,
    error=>console.log("the Error is::"+error))

    alert("this is length"+this.storeArray.length)
  }
  loadOutletRegistrationByName(SelectedName)
  {
    alert(SelectedName);
   for(var i=0;i<this.storeArray.length;i++)
   {
     if(SelectedName==this.storeArray[i].CUST_NAME)
     {
       alert("inner"+this.storeArray[i].CUST_NAME);
      
      this.storeArray[0]=this.storeArray[i];
      this.storeArray.length=1;
     }
    }
  }
}
