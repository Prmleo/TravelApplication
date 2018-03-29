import {AbstractControl}from '@angular/forms';

export class FormValidation
{
    static noSpace(control:AbstractControl)
    {
        var textboxName:string=control.value;
        for(var i=0;textboxName[i];i++)
        { 
       // if((textboxName[i]>='a')&&(textboxName[i]<='z')||((textboxName[i]>='A')&&(textboxName[i]<='Z')))
        //{}
        //else 
        if((textboxName[i]==' '))
        return {noSpace:true};
        }
       return null;
    }
    static noNumber(control:AbstractControl)
    {
        var textboxName:string=control.value;

        for(var i=0;textboxName[i];i++)
        {
            if((Number(textboxName[i])<=9)&&(textboxName[i]!=' '))
            return {noNumber:true};
        }
        return null;
    }
    static noMail(control:AbstractControl)
    {
        var textboxName:string=control.value;
       
        for(var i=0;textboxName[i];i++)
        {
            if((textboxName[i])=="@")
            return null;
        }
        if(textboxName.length>0)
        return {noMail:true};
        
        
    }
    static noMobil(control:AbstractControl)
    {
        var textboxName:string=control.value;
       
        for(var i=0;textboxName[i];i++)
        {
            if((Number(textboxName[0])==0)&&(Number(textboxName[1])==5))
            return null;
        }
        if(textboxName.length!=0)
        return {noMobil:true};
        
    }
    static noMobStr(control:AbstractControl)
    {
        var textboxName:string=control.value;
        for(var i=0;textboxName[i];i++)
        {
            if(((textboxName[i]>='a')&&(textboxName[i]<='z'))||((textboxName[i]>='A')&&(textboxName[i]<='Z')))
            return {noMobStr:true};
        }
        return null;
    }
    static passNumber(control:AbstractControl)
    {
        var textboxName:string=control.value;

        if (control.value.match(/[a-zA-Z]{1}[0-9]{7}/)) {            
            return null;
        }
        else {            
            return { passNumber: true };
        }
    }
}