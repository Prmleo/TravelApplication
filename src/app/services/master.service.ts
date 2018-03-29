import { Injectable } from "@angular/core";
import { Http,Headers,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Constant } from "../constant";
import {ApiRelationModel}from '../Models/relationModel';

@Injectable()
export class MasterService {
    userDatas:any;
    planeName:any;
    schmeId:any;
    editQuoteNo:any=null;
    constructor(private http: Http) { } 

  getAllReferenceNumber() :Observable<any[]>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getAllReferenceNumber').map(response =>{
    return response.json();
    });
    return lists;
  }

  getAllReferenceNumberId(SelectedID:any):Observable<any>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getCardNumberId?id'+SelectedID).map(response=>{
      return response.json();
    });
    return lists;
  }

  getRelation():Observable<ApiRelationModel[]>
  {
      let lists= this.http.get(Constant.baseUrl+'api/all/getRelation').map((response:Response)=>{
          return <ApiRelationModel[]>response.json();
      })
      return lists;
  }
 
  getNationality():Observable<ApiRelationModel[]>
  {
      
      let lists= this.http.get(Constant.baseUrl+"api/all/getNationality").map((response:Response)=>{
      return <ApiRelationModel[]>response.json();
  })
  return lists;
  }
  private handleError(error:Response)
  {
      return Observable.throw(error.statusText);
  }

  getcusData(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/ExistingQuote?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
  getAllCountries():Observable<any[]>{

    let lists=this.http.get(Constant.baseUrl+'api/all/getallcountries').map(response =>{
        return response.json();
        });
        return lists;
  }

  getAllOccupations():Observable<any[]>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getalloccupations').map(response =>{
        return response.json();
        });
        return lists;
  }

  getAllCities():Observable<any[]>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getallcities').map(response =>{
        return response.json();
        });
        return lists;
  }

  getAllStates():Observable<any[]>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getallstates').map(response =>{
        return response.json();
        });
        return lists;
  }

  getPortfolioPolices(SelectedName):Observable<ApiRelationModel[]>
  {
      let lists= this.http.get(Constant.baseUrl+'api/all/PortFolio?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
          return <ApiRelationModel[]>response.json();
      })
      return lists;
  }
  getCancelledPolicy(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/CancelledPolicy?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getApprovedQuotes(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/ApprovedReferralQuotes?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getUNApprovedQuotes(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/UnApprovedReferralQuotes?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getRejectQuotes(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/RejectReferralQuotes?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getCustomerData(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/viewCustomer?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getCustomerReport(startDate,EndDate,brokerType):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/viewReport?sdate='+startDate+'&edate='+EndDate+'&login_Id='+brokerType+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getTravelCoverList():Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/getTravelCover').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        //alert("list in service"+JSON.stringify(lists));
        return lists;
    }
    getTravelPeriodList():Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/getTravePeriod').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
     getPremiumInfo(AppNumber):Observable<ApiRelationModel[]>
     {
    //     //alert("im service alert = "+AppNumber);
        let lists= this.http.get(Constant.baseUrl+'api/all/getTravePolicyCoverage?appno='+AppNumber).map((response:Response)=>{
             return <ApiRelationModel[]>response.json();
         })
         return lists;
     }
    transData(userDatas,planeName,schmId)
    {
        this.userDatas=userDatas;
        this.planeName=planeName;
        this.schmeId=schmId;
    }
    sendUserData()
    {
        return this.userDatas;
    }
    sendplaneName()
    {
        return this.planeName;
    }
    sendSchmeId()
    {
        return this.schmeId;
    }
    getEditeAppNumber(QuoteNo)
    {
        this.editQuoteNo=QuoteNo;
    }
    sendEditeAppNumber()
    {
        //alert("hi im reached service"+this.editQuoteNo);
        return this.editQuoteNo;
    }
    getSchemeCover(schemeID):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/getViewCovers?schemeId='+schemeID).map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getPremium(AppNo,schemeID):Observable<ApiRelationModel[]>
    {
        //alert("appno"+AppNo);
        //alert("id"+schemeID);
        let lists= this.http.get(Constant.baseUrl+'api/all/buyPolicy?applNo='+AppNo+'&schemId='+schemeID).map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }

}
