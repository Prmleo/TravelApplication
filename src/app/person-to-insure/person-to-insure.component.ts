import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { MasterService } from'../services/master.service';
import { UserService } from'../services/user.service';
import{ApiRelationModel}from '../Models/relationModel';
import{NationalityModel}from '../Models/nationalityModel';
import {PassengerFormValidation}from './validationFile';
//import { FormBuilder } from '@angular/forms/src/form_builder';

import { Router } from '@angular/router';


@Component({
  selector: 'app-person-to-insure',
  templateUrl: './person-to-insure.component.html',
  styleUrls: ['./person-to-insure.component.css']
})
export class PersonToInsureComponent implements OnInit {
  myFormObject:FormGroup;
  relationArray:ApiRelationModel[];
  nationArr:ApiRelationModel[];
  cardNumber:any;
  sno:number=1;
  personObject:any=[{}];
  morePerson:boolean=false;
  travelObjet:any={};

  constructor(private apiService:MasterService,public fb:FormBuilder ,private userService:UserService,public router:Router) {  
    this.myFormObject=new FormGroup({
      passengerName:new FormControl('',[Validators.required,PassengerFormValidation.noSpace,PassengerFormValidation.noNumber]),
      passengerNameArabic:new FormControl('',Validators.required),
      NationalId:new FormControl('',[Validators.required,Validators.maxLength(18)]),
      passName:new FormControl('',[Validators.required,PassengerFormValidation.passNumber]),
      myNation:new FormControl('',[Validators.required,PassengerFormValidation.passNumber]),
      myRelation:new FormControl('',Validators.required),
      myDob:new FormControl('',Validators.required),
      myGender:new FormControl('',Validators.required),
      passExpireDate:new FormControl('',Validators.required),
      Sno:new FormControl('',Validators.required),
      cusNameEnglish:new FormControl('',[Validators.required,PassengerFormValidation.noSpace,PassengerFormValidation.noNumber]),
    cusNameArabic:new FormControl('',Validators.required),
    cusNameEnglishHeader:new FormControl('',Validators.required),
    mail:new FormControl('',[Validators.required,PassengerFormValidation.noMail]),
    Mobile:new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(12),PassengerFormValidation.noMobil,PassengerFormValidation.noMobStr])

      
  })
}
getRelation():void{
  this.apiService.getRelation().subscribe(resultArray=>this.relationArray=resultArray,
  error=>console.log("the Error is::"+error))
 
}
getNationality():void{
  this.apiService.getNationality().subscribe(resultArr=>this.nationArr=resultArr,
  error=>console.log("the Error is::"+error))
}
incrementSno()
{
  this.morePerson=true;
  this.sno=this.sno+1;
}
submit(model: any, isValid: boolean) {
  console.log(model, isValid);
let  Name = this.myFormObject.controls.passengerName.value
let NameArabic = this.myFormObject.controls.passengerNameArabic.value
let Nationaid = this.myFormObject.controls.NationalId.value
let passportNum=this.myFormObject.controls.passName.value
let Nation=this.myFormObject.controls.myNation.value
let Relation=this.myFormObject.controls.myRelation.value
let Dob=this.myFormObject.controls.myDob.value
let Gender=this.myFormObject.controls.myGender.value
let passExpir=this.myFormObject.controls.passExpireDate.value
let SerialNo=this.myFormObject.controls.Sno.value
let relationId
let nationalityId
for(var i=0;i<this.relationArray.length;i++)
{
  //alert(Relation);
  if(Relation==(this.relationArray[i].relationType))
  {
    alert(this.relationArray[i].id);
    relationId=this.relationArray[i].id;
  }
}
for(var i=0;i<this.nationArr.length;i++)
{
  //alert(Relation);
  if(Nation==(this.nationArr[i].nationalityName))
  {
    alert("nat id="+this.nationArr[i].id);
    nationalityId=this.nationArr[i].id;
  }
}

this.personObject=[{"serialNumber":SerialNo,"passengerName":Name,"passengerLastName":NameArabic,
                  "dateOfBirth":Dob,"gender":Gender[0],"relation":{"id":relationId,"relationType": Relation},
                  "nationality":{"id":nationalityId,"nationalityName":Nation},
                   "iqamaNO":Nationaid,"passportNo": passportNum,"passportExpiryDate":passExpir}];
  alert(JSON.stringify(this.personObject));
  this.userService.RegisterPerson(this.personObject).subscribe(
    data => console.log("post request Success"+JSON.stringify(data)),
    err => console.log("post request error is"+err));
  }
ngOnInit():void {

 this.getNationality();
 this.getRelation();
  
}
goback()
{
  this.router.navigate(['/navbar']);
}
  get passengerName()
{
  return this.myFormObject.get('passengerName');
}
get passengerNameArabic()
{
  return this.myFormObject.get('passengerNameArabic');
}
get NationalId()
{
  return this.myFormObject.get('NationalId');
}
get passName()
{
  return this.myFormObject.get('passName');
}
get myNation()
{
  return this.myFormObject.get('myNation');
}
insuredTravel()
{
   sessionStorage.setItem("personObject",JSON.stringify(this.personObject));
   this.router.navigate(['/calculate']);
}
}


