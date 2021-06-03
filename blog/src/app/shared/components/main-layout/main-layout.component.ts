import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsb-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public notMainPage = false;

  constructor() { }

  ngOnInit(): void {
    this.isMainPage();
  }

  isMainPage(){
    console.log(document.location.pathname)
    if(document.location.pathname === "/"){
      this.notMainPage = true;
      }
      this.notMainPage = false;
    console.log(this.notMainPage);
  }
}
