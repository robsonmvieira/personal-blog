import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/helpers/resources/categories';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories = categories
  addNewCategory = false;
  constructor() { }

  ngOnInit() {
  }

  showModalNewCategory() {
    this.addNewCategory = !this.addNewCategory;
  }
}
