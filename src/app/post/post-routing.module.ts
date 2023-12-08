import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./post/post.component";
import {AddPostComponent} from "./add-post/add-post.component";

const routes: Routes = [

  {path:"",component: PostComponent},
  {path:"add",component: AddPostComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
