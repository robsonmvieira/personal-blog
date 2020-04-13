import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-post',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddPostComponent implements OnInit {
      editorConfig: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '30rem',
      minHeight: '20rem',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: 'Open Sans',
      defaultFontSize: '3em',
      fonts: [
          {class: 'arial', name: 'Arial'},
          {class: 'times-new-roman', name: 'Times New Roman'},
          {class: 'calibri', name: 'Calibri'},
          {class: 'comic-sans-ms', name: 'Comic Sans MS'},
          {class: 'Open-Sans', name: 'Open-Sans'}
        ],
      customClasses: [
        {
          name: 'quote',
          class: 'quote',
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: 'titleText',
          class: 'titleText',
          tag: 'h1',
        },
      ],
      uploadUrl: 'v1/image',
      uploadWithCredentials: false,
      sanitize: true,
      toolbarPosition: 'top',
      toolbarHiddenButtons: [
      ]
  };
  constructor() { }

  ngOnInit() {

  }

}
