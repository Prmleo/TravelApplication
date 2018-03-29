import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/Rx';
import { Constant } from '../constant';
import { ApiRelationModel } from '../Models/relationModel';
import { AuthenticateService } from '../services/authenticate.service';
import { UserService } from '../services/user.service';
import { MasterService } from '../services/master.service';


@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit, OnDestroy {
  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  TravelCoverLists: any = [{}];
  userDatas: any = {};
  planeName: any;
  TravelCover: any;
  TravelPeriodLists: any = [{}];
  TravelPeriod: any;
  SchemeCover: any;
  schmId: any;
  customerGender: any;
  customerNationality: any;
  PremiumDetails: any = [{}];

  constructor(public route: ActivatedRoute, public router: Router, public authenticate: AuthenticateService, public userService: UserService, public master: MasterService) { }

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');

    this.loadAllOccupation();
    this.loadAllCity();
    this.getTravelPeriodList();
    this.userDatas = this.master.sendUserData();
    this.planeName = this.master.sendplaneName();
    this.schmId = this.master.sendSchmeId();
    this.getPremium(this.userDatas.applicationNo, this.schmId);
    this.getSchmeCover(this.schmId);
    this.getTravelCoverList();
    //alert("this gender"+this.userDatas.gender);
    if (this.userDatas.genders == "M") {
      // alert("this is gender");
      this.customerGender = "Male";
    }
    else
      this.customerGender = "Female";
    this.loadAllNationality();
    // alert(JSON.stringify(this.Occupations[0].occupationName))

    // var personObject=JSON.parse(sessionStorage.getItem('personObject'));   
    //   if(personObject==null)
    //     {
    //       this.router.navigate(['/new']);
    //     }
    //     else
    //     {
    //       this.user = Object.assign(personObject, this.user);    
    //     }
  }

  ngOnDestroy() {
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

  user: any = {
    Occupation: {},
    City: {},
    Nationality: {}
  }

  Occupations: any[]
  Citys: any[]
  Nationalitys: any[]



  loadAllOccupation(): void {
    this.master.getAllOccupations().subscribe(Occupation => {
      this.Occupations = Occupation;
    });
  }

  loadAllCity(): void {
    this.master.getAllCities().subscribe(City => {
      this.Citys = City;
    });
  }
  loadAllNationality(): void {
    this.master.getNationality().subscribe(Nationality => {
      this.Nationalitys = Nationality;
    });

    for (var i = 0; i < this.Nationalitys.length; i++) {
      if (this.userDatas.nationality == this.Nationalitys[i].CODE) {
        this.customerNationality = this.Nationalitys[i].CODEVALUE;
      }
    }
  }
  getTravelCoverList(): void {
    this.master.getTravelCoverList().subscribe(resultArr => this.TravelCoverLists = resultArr,
      error => console.log("the Error is::" + error))
    for (var i = 0; i < this.TravelCoverLists.length; i++) {
      alert("hi");
      alert("user id" + this.userDatas.travelCover);
      //alert("the cover is"+this.TravelCoverLists[1].CODEDESC);
      if (this.userDatas.travelCover == this.TravelCoverLists[i].CODE) {
        //alert("the cover is"+this.TravelCoverLists[i].CODEDESC);
        this.TravelCover = this.TravelCoverLists[i].CODEDESC;
      }
    }

  }
  getTravelPeriodList(): void {
    this.master.getTravelPeriodList().subscribe(resultArr => this.TravelPeriodLists = resultArr,
      error => console.log("the Error is::" + error))

    for (var i = 0; i < this.TravelPeriodLists.length; i++) {
      if (this.userDatas.coverPeriod == this.TravelPeriodLists[i].CODE) {
        this.TravelPeriod = this.TravelPeriodLists[i].CODEDESC;
      }
    }
  }
  getSchmeCover(schmeId): void {
    this.master.getSchemeCover(schmeId).subscribe(resultArr => this.SchemeCover = resultArr,
      error => console.log("the Error is::" + error))

  }
  getPremium(appno, scmid): void {
    this.master.getPremium(appno, scmid).subscribe(resultArr => this.PremiumDetails = resultArr,
      error => console.log("the Error is::" + error))
    alert("details" + this.PremiumDetails.TOTAL_PREMIUM);
  }

}
