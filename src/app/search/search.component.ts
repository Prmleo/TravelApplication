import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  id: string = "SaudiBroker";
  storeArray: any = [];
  constructor(private apiService: MasterService, private router: Router) { }

  ngOnInit() {

    this.getcusData();
    
  }
  getcusData(): void {
    this.apiService.getcusData(this.id).subscribe(resultArr => this.storeArray = resultArr,
      error => console.log("the Error is::" + error))
     // this.startmyLoad();
  }
  
  characters = [
      'Finn the human',
      'Jake the dog',
      'Princess bubblegum',
      'Lumpy Space Princess',
      'Beemo1',
      'Beemo2'
    ]

    showdatas()
    {
      //alert("hi");
      document.getElementById("srchTable").hidden=false;
    }
}
