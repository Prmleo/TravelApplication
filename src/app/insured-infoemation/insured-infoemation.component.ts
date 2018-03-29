import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { FormValidation } from './validationFile';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { MasterService } from '../services/master.service';
import { UserService } from '../services/user.service';
import { Errors } from './errorMessages';
import { ApiRelationModel } from '../Models/relationModel';
import { Router } from '@angular/router';
//import{Popup}from 'ng2-opd-popup';
@Component({
  selector: 'app-insured-infoemation',
  templateUrl: './insured-infoemation.component.html',
  styleUrls: ['./insured-infoemation.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1.1)', left: '0',
      })),
      state('large', style({
        transform: 'scale(0.5)', left: '70%',
      })),
      transition('small => large', animate('6000ms ease-in')),
    ]),
  ]
})
export class InsuredInfoemationComponent implements OnInit {
  myFormObject: FormGroup;
  travelObjet: any = {};
  userDatas: any = {};
  relationArray: ApiRelationModel[];
  nationArr: ApiRelationModel[];
  cardNumber: any;
  sno: number = 1;
  personObject: any = [{}];
  TravelCoverLists: any = [{}];
  TravelPeriodLists: any = [{}];
  premiumInfoArry: any = [{}];
  QuatationNumber: any = null;
  ResponseValue: any;
  morePerson: boolean = false;
  TravelCoverId;
  //editeQuoteNo:any;
  SchemeCover: any = [{}];
  ApplicationNo: any = null;
  cusDob:any;
  addedDate:any;
  coverPeriod:any=[];
  //MycoverPeriod:any;
  usrName:any;
  usrNameArabic:any;

  constructor(public fb: FormBuilder, private userService: UserService, public errs: Errors,
    private apiService: MasterService, public router: Router) {
    this.myFormObject = new FormGroup({
      cusNameEnglish: new FormControl('', [Validators.required, FormValidation.noSpace, FormValidation.noNumber]),
      cusNameArabic: new FormControl('', Validators.required),
      cusNameEnglishHeader: new FormControl('', Validators.required),
      NationalId: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      mail: new FormControl('', [Validators.required, FormValidation.noMail]),
      Mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), FormValidation.noMobil, FormValidation.noMobStr]),
      //merge tabel

      passengerName: new FormControl('', [Validators.required, FormValidation.noSpace, FormValidation.noNumber]),
      passengerNameArabic: new FormControl('', Validators.required),
      passName: new FormControl('', [Validators.required, FormValidation.passNumber]),
      myNation: new FormControl('', [Validators.required, FormValidation.passNumber]),
      myRelation: new FormControl('', Validators.required),
      myDob: new FormControl('', Validators.required),
      myGender: new FormControl('', Validators.required),
      passExpireDate: new FormControl('', Validators.required),
      Sno: new FormControl('', Validators.required),
      MycoverPeriod: new FormControl('', Validators.required),
      inceptionDate: new FormControl('', Validators.required),
      expieryDate: new FormControl('', Validators.required)
    })
  }
  ngOnInit() {
    this.getNationality();
    this.getRelation();
    this.getTravelCoverList();
    this.getTravelPeriodList();
    this.getEditeQuoteData();

  }
  submit(model: any, isValid: boolean) {
    console.log(model, isValid);
    let customerName = this.myFormObject.controls.cusNameEnglish.value
    let customerNameInArabic = this.myFormObject.controls.cusNameArabic.value
    let NationId = this.myFormObject.controls.NationalId.value
    let userMail = this.myFormObject.controls.mail.value
    let mobile = this.myFormObject.controls.Mobile.value
    let header = this.myFormObject.controls.cusNameEnglishHeader.value

    let Name = this.myFormObject.controls.passengerName.value
    let NameArabic = this.myFormObject.controls.passengerNameArabic.value
    let Nationaid = this.myFormObject.controls.NationalId.value
    let passportNum = this.myFormObject.controls.passName.value
    let Nation = this.myFormObject.controls.myNation.value
    let Relation = this.myFormObject.controls.myRelation.value
    let Dob = this.myFormObject.controls.myDob.value.toISOString().split('T')[0];
    
    let Gender = this.myFormObject.controls.myGender.value
    let passExpir = this.myFormObject.controls.passExpireDate.value.toISOString().split('T')[0];
    let SerialNo = this.myFormObject.controls.Sno.value
    let relationId
    let nationalityId
    for (var i = 0;this.relationArray[i]; i++) {
      //alert(Relation);
      if (Relation == (this.relationArray[i].CODEDESC)) {
       // alert("im from relation" + this.relationArray[i].CODE);
        relationId = this.relationArray[i].CODE;
      }
    }
    for (var i = 0;this.nationArr[i]; i++) {
      //alert(Relation);
      if (Nation == (this.nationArr[i].CODEVALUE)) {
        //alert("nat id="+this.nationArr[i].CODE);
        nationalityId = this.nationArr[i].CODE;
      }
    }

    //Travel Period List
    let coverPeriodId;
    let coverPeriod = this.myFormObject.controls.MycoverPeriod.value
    for (var i = 0;this.TravelPeriodLists[i]; i++) {
      if ((coverPeriod) == (this.TravelPeriodLists[i].CODEDESC)) {
        coverPeriodId = this.TravelPeriodLists[i].CODE;
      }
    }
    let TravelPeriodInceptionDate = this.myFormObject.controls.inceptionDate.value.toISOString().split('T')[0];;
   // let TravelPeriodExpieryDate = this.myFormObject.controls.expieryDate.value.toISOString().split('T')[0];;
    // for(var i=0;i<Dob.length;i++)
    // {
    //   alert("hi");
    //   if(Dob[i]=='T')
    //   break;
    //   else{
    //     this.cusDob[i]=Dob[i];
    //     alert(this.cusDob[i]);
    //   }
      
    // }
    this.userDatas = {
      "quoteNumber": this.QuatationNumber,
      "applicationNo": this.ApplicationNo,
      "title": header,
      "customerName": customerName,
      "custNameArabic": customerNameInArabic,
      "companyRegNo": NationId,
      "email": userMail,
      "mobileNo": mobile,
      "serialNo": this.sno,
      "travelNames": this.usrName,
      "travelLastNames": this.usrNameArabic,
      "dobs": Dob,
      "genders": Gender[0],
      "relations": relationId,
      "nationalitys": nationalityId,
      "iqamaNo": Nationaid,
      "passportNo": passportNum,
      "passportExpDate": passExpir,
      "travelCover": this.TravelCoverId,
      "coverPeriod": coverPeriodId,
      "inceptionDt": TravelPeriodInceptionDate,
      "inceptionEndDate": this.addedDate 
    }

    this.userService.saveUserDetails(this.userDatas).subscribe(
      data => {
      this.ResponseValue = data; alert("the port number inside" + JSON.stringify(this.ResponseValue));
        this.ApplicationNo = this.ResponseValue.applicationNo;
        this.QuatationNumber = this.ResponseValue.quoteNumber;
        this.premiumInfoArry=this.ResponseValue.view_policy;
        //alert("appNo = "+this.ApplicationNo);
        //this.getPremiumInfo(this.ApplicationNo);
        let last = document.getElementById("last");
        last.hidden = false;
        err => console.log("post request error is" + err)
      });

  }
  
  state: string = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  adDays:number;
  dateControls()
  {
    var today = new Date().toISOString().split('T')[0];
        document.getElementsByName("appo_date")[0].setAttribute('max', today);
  }
  getdate() {
    alert(this.coverPeriod);
     if(this.coverPeriod=="15 Days")
     this.adDays=15;
     else if(this.coverPeriod=="30 Days")
     this.adDays=30;
     alert(this.adDays);
var tt = this.myFormObject.controls.inceptionDate.value;

var date = new Date(tt);
var newdate = new Date(date);

newdate.setDate(newdate.getDate() + this.adDays);

var dd = newdate.getDate();
var mm = newdate.getMonth() + 1;
var y = newdate.getFullYear();

var someFormattedDate = mm + '/' + dd + '/' + y;
this.addedDate = new Date(someFormattedDate).toISOString().split('T')[0];
}
  popupclick(schemeID: any) {
    //alert("scmID is"+schemeID);

    let myschme = document.getElementById("schme");
    myschme.hidden = false;
    let last = document.getElementById("last");
    last.hidden = true;
    let travPeriod = document.getElementById("travelPeriod");
    travPeriod.hidden = true;
    let travlCover = document.getElementById("travelCover");
    travlCover.hidden = true;
    let personIn = document.getElementById("personInsure");
    personIn.hidden = true;
    let insuredInfo = document.getElementById("insuredInfo");
    insuredInfo.hidden = true;
    let CalBut = document.getElementById("calculbutton");
    CalBut.hidden = true;
    this.apiService.getSchemeCover(schemeID).subscribe(resultArr => this.SchemeCover = resultArr,
      error => console.log("the Error is::" + error))

    //alert("cover"+(this.SchemeCover.value));

  }
  incrementSno() {
    this.morePerson = true;
    this.sno = this.sno + 1;
  }
  showResponse() {
    //alert("inside showresponse"+JSON.stringify(this.ResponseValue));
  }
  showAll() {
    let myschme = document.getElementById("schme");
    myschme.hidden = true;
    let last = document.getElementById("last");
    last.hidden = false;
    let travPeriod = document.getElementById("travelPeriod");
    travPeriod.hidden = false;
    let travlCover = document.getElementById("travelCover");
    travlCover.hidden = false;
    let personIn = document.getElementById("personInsure");
    personIn.hidden = false;
    let insuredInfo = document.getElementById("insuredInfo");
    insuredInfo.hidden = false;
    let CalBut = document.getElementById("calculbutton");
    CalBut.hidden = false;
  }
  sendTravelcover(tId: any) {
    //alert("the tId is"+tId);
    this.TravelCoverId = tId;
  }
  getRelation(): void {
    this.apiService.getRelation().subscribe(resultArray => this.relationArray = resultArray,
      error => console.log("the Error is::" + error))

  }
  getNationality(): void {
    this.apiService.getNationality().subscribe(resultArr => this.nationArr = resultArr,
      error => console.log("the Error is::" + error))
  }
  getTravelCoverList(): void {
    this.apiService.getTravelCoverList().subscribe(resultArr => this.TravelCoverLists = resultArr,
      error => console.log("the Error is::" + error))
  }
  getTravelPeriodList(): void {
    this.apiService.getTravelPeriodList().subscribe(resultArr => this.TravelPeriodLists = resultArr,
      error => console.log("the Error is::" + error))
  }
  getPremiumInfo(appNumber): void {
    this.apiService.getPremiumInfo(appNumber).subscribe(resultArr => this.premiumInfoArry = resultArr,
      error => console.log("the Error is premiumInfo::" + error))
  }
  MoveNextPage(planeName: any, schmId: any) {
    sessionStorage.setItem("personObject", JSON.stringify(this.userDatas));
    this.apiService.transData(this.userDatas, planeName, schmId);
    this.router.navigate(['/calculate']);

  }
  getEditeQuoteData()
  {
   this.QuatationNumber=this.apiService.sendEditeAppNumber();
    //alert("im new"+JSON.stringify( this.QuatationNumber))
  }
  //followed for validation return

  get cusNameEnglish() {
    return this.myFormObject.get('cusNameEnglish');
  }
  get cusNameArabic() {
    return this.myFormObject.get('cusNameArabic');
  }
  get mail() {
    return this.myFormObject.get('mail');
  }
  get NationalId() {
    return this.myFormObject.get('NationalId');
  }
  get Mobile() {
    return this.myFormObject.get('Mobile');
  }

  login(event) {
    console.log(event);
  }
  // second component

  get passengerName() {
    return this.myFormObject.get('passengerName');
  }
  get passengerNameArabic() {
    return this.myFormObject.get('passengerNameArabic');
  }
  get passName() {
    return this.myFormObject.get('passName');
  }
  get myNation() {
    return this.myFormObject.get('myNation');
  }
  get MycoverPeriod() {
    return this.myFormObject.get('MycoverPeriod');
  }
  get inceptionDate() {
    return this.myFormObject.get('inceptionDate');
  }
  get expieryDate() {
    return this.myFormObject.get('expieryDate');
  }

}
