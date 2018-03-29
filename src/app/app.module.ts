import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from'@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from'@angular/router';


import { AuthenticateService } from'./services/authenticate.service';
import { MasterService } from'./services/master.service';
import { UserService } from'./services/user.service';

import { AppRoute } from './app.route';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewComponent } from './new/new.component';
import { ExistingQuotesComponent } from './existing-quotes/existing-quotes.component';
import { LapsedQuotesComponent } from './lapsed-quotes/lapsed-quotes.component';
import { RejectedQuotesComponent } from './rejected-quotes/rejected-quotes.component';
import { PortfolioPoliciesComponent } from './portfolio-policies/portfolio-policies.component';
import { CancelledPoliciesComponent } from './cancelled-policies/cancelled-policies.component';
import { ReferalApprovedQuotesComponent } from './referal-approved-quotes/referal-approved-quotes.component';
import { ReferalUnapprovedQuotesComponent } from './referal-unapproved-quotes/referal-unapproved-quotes.component';
import { ReferralRejectQuotesComponent } from './referral-reject-quotes/referral-reject-quotes.component';
import { ReportsComponent } from './reports/reports.component';
import { QuoteTravelComponent } from './quote-travel/quote-travel.component';
import{ PersonToInsureComponent } from'./person-to-insure/person-to-insure.component';
import{Errors} from './insured-infoemation/errorMessages';
import { CalculateComponent } from './calculate/calculate.component';
import{ TestComponent } from'./ExcistingQuote/test.component';
import{InsuredInfoemationComponent}from './insured-infoemation/insured-infoemation.component';

import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { DataScrollerModule } from'primeng/primeng';
import { TooltipModule } from 'angular2-tooltips';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from'primeng/primeng';
import{PortfolioCancelledPolicyComponent}from './portfolio-cancelled-policy/portfolio-cancelled-policy.component';
import{CustomerComponent}from './customer/customer.component';
import{CopyQuotoComponent}from './copy-quoto/copy-quoto.component';
import{SearchComponent}from './search/search.component';
import { FilterPipe} from './filter.pipe';
import{NgDatepickerModule }from 'ng2-datepicker';
import{BsDatepickerModule}from 'ngx-bootstrap/datepicker';
import{tooltips}from 'tooltip';
//import{PopupModule}from 'ng2-opd-popup';
//import{Popup}from 'ng2-opd-popup';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBarComponent,
    FooterComponent,
    NavBarComponent,
    NewComponent,
    ExistingQuotesComponent,
    LapsedQuotesComponent,
    RejectedQuotesComponent,
    PortfolioPoliciesComponent,
    CancelledPoliciesComponent,
    ReferalApprovedQuotesComponent,
    ReferalUnapprovedQuotesComponent,
    ReferralRejectQuotesComponent,
    ReportsComponent,
    QuoteTravelComponent,
    PersonToInsureComponent,
    CalculateComponent,
    TestComponent,
    InsuredInfoemationComponent,
    PortfolioCancelledPolicyComponent,
    CustomerComponent,
    CopyQuotoComponent,
    SearchComponent,
    FilterPipe
    //Popup
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    DataScrollerModule,
    BsDatepickerModule.forRoot(),
    NgDatepickerModule,
    TooltipModule
    
   // PopupModule.forRoot()
  ],
  providers: [AuthenticateService,MasterService,UserService,Errors],
  bootstrap: [AppComponent]
})
export class AppModule { }
