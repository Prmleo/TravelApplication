import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: any): any[] {
    if(!items) return [];
    if(!searchText) return items;
//searchText =(searchText);
return items.filter( it => {
  for(var i=0;i<items.length;i++)
  {
  //if(searchText[i]>='a'&&searchText[i]<='z')
  //alert(it.CUSTOMER_NAME.toLowerCase().includes(Number(searchText)));
  //if(!(searchText>='a'&&searchText<='z'))
  //if(Number(searchText)==items[i].PREMIUM)
//return it.VALIDITY_DATE.includes(searchText);
  if(!(searchText>='a'&&searchText<='z'))
  {//console.log(it.VALIDITY_DATE.includes(searchText)) ;
    return it.QUOTATION_DATE.includes(searchText);}
  else
  {
    console.log(it.CUSTOMER_NAME.toLowerCase().includes(searchText))
    return it.CUSTOMER_NAME.includes(searchText);
  }
  
  //if((Number(searchText[i])>=0) && (Number(searchText[i])<=9))
      //{
        //alert("this is number");
        //alert(searchText);
        //alert(it.QUOTE_NO[i]);
        //return Number(it.QUOTE_NO.toLowerCase().includes(searchText));
     // }
  //if(searchText==it.PREMIUM)
  //{
    //alert("this is premium");
      //return it.PREMIUM.toLowerCase().includes(searchText);
  //}
  //if(searchText=='Date')
     // return it.VALIDITY_DATE.toLowerCase().includes(searchText);
  }
    });
   }
}