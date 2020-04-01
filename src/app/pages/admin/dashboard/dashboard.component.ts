import { Component, OnInit } from '@angular/core';
import { itensMenu } from '../../../helpers/resources/menu-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  itemsMenu = itensMenu


  itemSelected: string
  constructor() { }

  ngOnInit() {

  }

  selected(e) {
    this.itemSelected = e.title;
    console.log(e)
  }
}
