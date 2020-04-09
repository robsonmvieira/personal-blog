import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  isOn = false;
  selected: string = 'Categories'
  constructor(private dash: DashboardComponent) {

  }

  ngOnInit() {
    this.dash.itemMenuSelected.subscribe( (e) => {
      this.selected = e;
    })
  }
}
