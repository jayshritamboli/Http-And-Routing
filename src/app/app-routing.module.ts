import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './shared/Componants/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/Componants/post-form/post-form.component';
import { PostComponent } from './shared/Componants/post/post.component';
import { EmpDashboardComponent } from './shared/Componants/EmplyoeeCurd/emp-dashboard/emp-dashboard.component';
import { EmpFormComponent } from './shared/Componants/EmplyoeeCurd/emp-form/emp-form.component';
import { EmplyoeeComponent } from './shared/Componants/EmplyoeeCurd/emplyoee/emplyoee.component';
//localhost:4200/ - post-dashoard
//localhost:4200/posts - post-dashoard
//localhost:4200/posts/:id - post component
//localhost:4200/posts/:id/edit - post form component on edit mode
//localhost:4200/posts/addPost - post form component on add mode

const routes: Routes = [
  {
    path: 'posts',//localhost:4200/ - post-dashoard
    component: PostDashboardComponent
  },
  {
    path: '',//localhost:4200/ - post-dashoard
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path:'posts/addPost',//localhost:4200/posts/addPost
    component:PostFormComponent
  },
   
  {
    path:'posts/:id',//localhost:4200/posts/123
    component:PostComponent
  },
  {
    path:'posts/:id/edit',//localhost:4200/posts/123/edit >> edit mode
    component:PostFormComponent
  },

//employee routes
{
  path:'emps',
  component: EmpDashboardComponent
},
{
  path:'',
  redirectTo:'emps',
  pathMatch:'full'
},
{
  path:'emps/addEmp',
  component: EmpFormComponent
},
{
  path:'emps/:id/edit',   
  component: EmpFormComponent
},
{
  path:'emps/:id',
  component: EmplyoeeComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
