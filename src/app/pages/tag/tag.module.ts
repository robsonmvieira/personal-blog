import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './tag-list/tag-list.component';
import { AddTagComponent } from './add-tag/add-tag.component';



@NgModule({
  declarations: [TagListComponent, AddTagComponent],
  imports: [
    CommonModule
  ]
})
export class TagModule { }
