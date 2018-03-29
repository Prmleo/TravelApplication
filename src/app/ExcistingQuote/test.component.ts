import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myFormObject: FormGroup;
  storeArray: any = [];
  tempArray:any=[];
  sno: number = 1;
  rejectedData: any = {};
  id: string = "SaudiBroker";
  Reason: any;
  rejectMessage:any;
  limit:number=10;
  arryLength:any;
  selectedUser:any;
  constructor(private apiService: MasterService, private router: Router) {
    this.myFormObject = new FormGroup({
      ReasonData: new FormControl('', Validators.required)
    })
  }

  get ReasonData() {
    return this.myFormObject.get('ReasonData');
  }

  ngOnInit() {

    this.getcusData();
    this.reduceArraylist('All');
  }
  getcusData(): void {
    this.apiService.getcusData(this.id).subscribe(resultArr => this.storeArray = resultArr,
      error => console.log("the Error is::" + error));
      for(var i=0,j=0;i<this.storeArray.length;i++)
      {//alert("inside temp store")
        this.tempArray[j++]=this.storeArray[i];
      }
     // this.startmyLoad();
  }

  loadOutletRegistrationByName(SelectedName) {
    alert(SelectedName);
    for (var i = 0; i < this.storeArray.length; i++) {
      if (SelectedName == this.storeArray[i].CUSTOMER_NAME) {
        alert("inner" + this.storeArray[i].CUSTOMER_NAME);

        this.storeArray[0] = this.storeArray[i];
        this.storeArray.length = 1;
      }
    }
  }

  showEdite(QuoteNo) {
    //alert("the quote" + QuoteNo);
    this.apiService.getEditeAppNumber(QuoteNo);
    this.router.navigate(['/new']);
  }
  showRejectQuote(rejectData) {
    //alert("ejected" + JSON.stringify(rejectData));
    this.rejectedData = rejectData;
    let frst = document.getElementById("frstform");
    frst.hidden = true;
    let secondForm = document.getElementById("secondfrm");
    secondForm.hidden = false;
    //alert("im the loded one" + JSON.stringify(this.rejectedData));
  }

  goback() {
    document.getElementById("secondfrm").hidden = true;
    document.getElementById("frstform").hidden = false;
  }
  rejectSubmit() {
    //alert("the reason is " + this.Reason);
    document.getElementById("rejectTable").hidden=true;
    document.getElementById("reason").hidden=true;
    document.getElementById("messg").hidden=false;
    document.getElementById("re").hidden=true;
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
  // startmyLoad()
  // {
  //  // var i=0,j=0;
  //  // var max=i+this.limit;
  //   //for(i;i<10;i++)
  //  // {
  //    //alert("hi");
  //    var i=0,j=0;
  //   var max=i+this.limit;
  //   for(i;i<this.storeArray.length;i++)
  //   {
  //     this.tempArray[j++]=this.storeArray[i];
  //     this.tempArray.length=max;
  //   }
  //   //}
  // }
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
//   var app = angular.module("bavApp", ["bootstrap.angular.validation", "ui.bootstrap"]);

// app.config(['bsValidationConfigProvider', function(bsValidationConfigProvider) {
//   bsValidationConfigProvider.global.setValidateFieldsOn('display');
//   bsValidationConfigProvider.global.setDisplayErrorsAs('tooltip');
//   bsValidationConfigProvider.global.tooltipAppendToBody = true;
//   bsValidationConfigProvider.global.errorMessagePrefix = '<span class="glyphicon glyphicon-warning-sign"></span> &nbsp;';
// }])
}

