import { Comment } from './../../../models/comment';
import { Component, OnInit } from '@angular/core';
import { comments } from 'src/app/helpers/resources/comments';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments: Comment[] = comments
  addNewComment = false
  constructor() { }

  ngOnInit() {
  }

  showModalNewComment() {
    this.addNewComment = !this.addNewComment
  }
}
