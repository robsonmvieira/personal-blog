import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'sobre', component: AboutComponent
  },
  {
    path: 'contato', component: ContactComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'posts', loadChildren: () => import('./pages/posts/posts.module').then(p => p.PostsModule)
  },
  {
    path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(a => a.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
