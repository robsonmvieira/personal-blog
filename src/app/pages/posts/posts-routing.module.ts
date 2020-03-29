import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './list/post-list.component';
import { OneComponent } from './one/one.component';

const routes: Routes = [
  {
    path: '', component: PostListComponent

  },
  {
    path: 'detalhe/:id', component: OneComponent
  }
];

@NgModule({
 declarations: [],
 imports: [
   RouterModule.forChild(routes)
 ]

})
export class PostingRouterModule {}

