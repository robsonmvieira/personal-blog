import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment'
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  tinyMceKey: string = environment.tinyMceKey
  constructor() { }

  ngOnInit() {
  }

}
