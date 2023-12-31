import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./post/post/post.component";
const routes: Routes = [

  {path:"",component:PostComponent,children:[
      {path:"add-post",loadChildren:()=>import('./post/post.module').then(p=>p.PostModule)}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
