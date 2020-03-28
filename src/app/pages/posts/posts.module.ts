import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RemoveComponent } from './remove/remove.component';
import { OneComponent } from './one/one.component';
import { PostingRouterModule } from './posts-routing.module';



@NgModule({
  declarations: [ListComponent, AddComponent, RemoveComponent, OneComponent],
  exports: [ListComponent, OneComponent],
  imports: [
    CommonModule,
    PostingRouterModule
  ]
})
export class PostsModule { }
