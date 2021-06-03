import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { Tag, Tags } from '../post/post';

@Component({
  selector: 'wsb-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public filterService: FilterService) { }

  ngOnInit(): void {
  }

}
