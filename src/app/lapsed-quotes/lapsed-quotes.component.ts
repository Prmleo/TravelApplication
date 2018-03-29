import { Component, OnInit } from '@angular/core';
import { MasterService } from'../services/master.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-lapsed-quotes',
  templateUrl: './lapsed-quotes.component.html',
  styleUrls: ['./lapsed-quotes.component.css']
})
export class LapsedQuotesComponent implements OnInit {
  id:string="SaudiBroker";
  storeArray:any=[];
  arryLength:any;
  selectedUser:any;
  tempArray:any=[];
  limit:number=10;
  modeType:any;
  mode:any;
  constructor(private apiService:MasterService,private userService:UserService) { }

  ngOnInit() {
    this.getcusData();
    this.reduceArraylist('All');
  }
  getcusData():void{
    this.apiService.getcusData(this.id).subscribe(resultArr=>this.storeArray=resultArr,
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
sendMode(QuoteNo,option)
{
  if(option=="1")
  {
    this.mode="Active";
  }
  else
  this.mode="Reject";

  this.modeType={ "mode": this.mode,
  "QUOTE_NO": QuoteNo}
  alert("gng to post"+JSON.stringify(this.modeType));
  this.userService.sendMode(this.modeType).subscribe(
    data => {console.log("posted success Response is =" + data)
      err => console.log("post request error is" + err)
    });
//to delete the selected Quote
for(var i=0;this.tempArray[i];i++)
{
  if(this.tempArray[i].QUOTE_NO==QuoteNo)
  {
    for(var j=i;this.tempArray[j];j++)
    {
      this.tempArray[j]=this.tempArray[j+1];
      this.storeArray[j]=this.storeArray[j+1];
    }
    this.tempArray.length=j-1;
    break;
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
