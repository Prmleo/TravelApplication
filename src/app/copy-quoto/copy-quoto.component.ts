import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copy-quoto',
  templateUrl: './copy-quoto.component.html',
  styleUrls: ['./copy-quoto.component.css']
})
export class CopyQuotoComponent implements OnInit {
  searchBy:any;
  enteredValue:any;
  constructor() { }

  ngOnInit() {
  }
  getCopyQuote()
  {
    alert(this.searchBy);
    alert(this.enteredValue);
  }
}
