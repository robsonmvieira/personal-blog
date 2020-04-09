import { Component, OnInit, EventEmitter } from '@angular/core';
import { itensMenu } from '../../../helpers/resources/menu-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  itemsMenu = itensMenu;
  itemMenuSelected: EventEmitter<string> = new EventEmitter();

  itemSelected: string
  constructor() { }

  ngOnInit() {

  }

  selected(e) {
    this.itemSelected = e.title;
    // console.log(e)
    this.itemMenuSelected.emit(e.title);
  }
  showMe(e) {

  }
}
