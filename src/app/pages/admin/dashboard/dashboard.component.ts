import { Component, OnInit } from '@angular/core';
import { categories } from '../../../helpers/resources/category-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories = categories
  itemSelected: string
  constructor() { }

  ngOnInit() {

  }

  selected(e) {
    this.itemSelected = e.title;
    console.log(e)
  }
}
