import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PostComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PostModule { }
