import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRouterModule } from './admin-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRouterModule,
    EditorModule
  ]
})
export class AdminModule { }
