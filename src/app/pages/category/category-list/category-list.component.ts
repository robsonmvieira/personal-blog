import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/helpers/resources/posts';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  posts = posts

  constructor() { }

  ngOnInit() {
  }

}
