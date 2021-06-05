import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../filter.service';

@Component({
  selector: 'wsb-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public mainPage: boolean;
  route: string;

  constructor(
    public filterService: FilterService,
    public router: Router,
    public location: Location
    ) { 
      router.events.subscribe((val) => {
        if(location.path() != ''){
          this.route = location.path();
          this.mainPage = false;
        } else {
          this.route = 'Home';
          this.mainPage = true;
        }
      });
    }

  ngOnInit(): void {
  }
}
