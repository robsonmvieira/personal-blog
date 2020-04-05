import { tags } from './../../../helpers/resources/tags';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  tags = tags;
  addNewTag = false;
  constructor() { }

  ngOnInit() {
  }
  showModalNewTag(){
    this.addNewTag = !this.addNewTag;
  }
}
