import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  check:boolean = false;
  post: Post = {
    sujet: "",
    description: "",
    nbrlike: 0,
    nbrdislike:0
  }

  constructor(private dialogRef: MatDialogRef <AddPostComponent>,@Inject(MAT_DIALOG_DATA) public data: { action: string},private postService:PostService) {
  }
  closeDialog(){
    this.dialogRef.close();
  }
  addPost(info:string){
    this.postService.informationFactChecker(info).subscribe((fact)=>{
      if(fact.result){
        this.dialogRef.close(this.post);
      }else
        this.dialogRef.close();
    })
  }



}
