import { Component, OnInit } from '@angular/core';
import { MasterService } from'../services/master.service';
@Component({
  selector: 'app-referral-reject-quotes',
  templateUrl: './referral-reject-quotes.component.html',
  styleUrls: ['./referral-reject-quotes.component.css']
})
export class ReferralRejectQuotesComponent implements OnInit {

  id:string="SaudiBroker";
  storeArray:any=[];
  arryLength:any;
  selectedUser:any;
  tempArray:any=[];
  limit:number=10;
  constructor(private apiService:MasterService) { }

  ngOnInit() {
  }
  getRejectQuotes():void{
    this.apiService.getRejectQuotes(this.id).subscribe(resultArr=>this.storeArray=resultArr,
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
  reduceArraylist(usrChoice)
{
  var i=0,j=0;
  if(this.selectedUser=='user1'||this.selectedUser=='')
  {
    //alert("hi");
    if((usrChoice<=30)&&(usrChoice<=this.storeArray.length))
    for(i;i<(usrChoice);i++)
  {
    this.tempArray[j++]=this.storeArray[i];
    this.tempArray.length=usrChoice;
  }
  else
    {
      //alert("ok");
      for(var i=0;i<this.storeArray.length;i++)
      {
        this.tempArray[j++]=this.storeArray[i];
      }
    }
  }
}
changeUser(selectedUser)
{
  var j=0;
  //alert(selectedUser);
  if(selectedUser!='user1')
  {
    //alert("hi");
    this.tempArray.length=0;
    this.arryLength=0;
  }
  else
    {
      for(var i=0;i<this.storeArray.length;i++)
      {
        this.tempArray[j++]=this.storeArray[i];
      }
    }
}
firstPage()
  {
    var i=0,j=0;
    var max=i+this.limit;
    for(i;i<max;i++)
    {
      this.tempArray[j++]=this.storeArray[i];
      this.tempArray.length=max;
    }
  }
  secondPage()
  {
    var i=10,j=0;
    var max=i+this.limit;
    for(i;i<max;i++)
    {
      this.tempArray[j++]=this.storeArray[i];
      this.tempArray.length=max;
    }
  }
  thiredPage()
  {
    var i=20,j=0;
    var max=i+this.limit;
    for(i;i<this.storeArray.length;i++)
    {
      this.tempArray[j++]=this.storeArray[i];
      this.tempArray.length=max;
    }
  }
}
