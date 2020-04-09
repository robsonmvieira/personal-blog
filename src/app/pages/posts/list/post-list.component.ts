import { Component, OnInit } from '@angular/core';
import { posts } from '../../../helpers/resources/posts'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = posts
  addNewPost = false;
  constructor() { }

  ngOnInit() {

  }
  showModalNewPost(){
    this.addNewPost = !this.addNewPost;
  }

}
