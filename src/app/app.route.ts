import { Routes } from'@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core/src/metadata/directives';

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
import { PersonToInsureComponent } from'./person-to-insure/person-to-insure.component';
import { CalculateComponent } from './calculate/calculate.component';
import{ TestComponent } from'./ExcistingQuote/test.component';
import{PortfolioCancelledPolicyComponent}from './portfolio-cancelled-policy/portfolio-cancelled-policy.component';
import{CustomerComponent}from './customer/customer.component';
import{CopyQuotoComponent}from './copy-quoto/copy-quoto.component';
import{SearchComponent}from './search/search.component';
export const AppRoute:Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'topbar',
        component:TopBarComponent
    },
    {
        path:'footer',
        component:FooterComponent
    },
    {
        path:'',
        component:NavBarComponent
    },
    {
        path:'navbar',
        component:NavBarComponent
    },
    {
        path:'new',
        component:PersonToInsureComponent
    },
    {
        path:'existing',
        component:TestComponent
    },
    {
        path:'lapsedquotes',
        component:LapsedQuotesComponent
    },
    {
        path:'rejectedquotes',
        component:RejectedQuotesComponent
    },
    {
        path:'poilcies',
        component:PortfolioPoliciesComponent
    },
    {
        path:'cancelled',
        component:CancelledPoliciesComponent
    },
    {
        path:'Referral',
        component:ReferalApprovedQuotesComponent
    },
    {
        path:'referralunapproved',
        component:ReferalUnapprovedQuotesComponent
    },
    {
        path:'referralrejected',
        component:ReferralRejectQuotesComponent
    },
    {
        path:'report',
        component:ReportsComponent
    },
    {
        path:'quoteTravel',
        component:QuoteTravelComponent
    },
    {
        path:'calculate',
        component:CalculateComponent
    },
    {
        path:'newcom',
        component:NewComponent
    },
    {
        path:'portofilCancelled',
        component:PortfolioCancelledPolicyComponent
    },
    {
        path:'customer',
        component:CustomerComponent
    },
    {
        path:'copy',
        component:CopyQuotoComponent
    },
    {
        path:'srch',
        component:SearchComponent
    }
];