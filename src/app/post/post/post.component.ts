import {Component, OnInit} from '@angular/core';
import {AddPostComponent} from "../add-post/add-post.component";
import {MatDialog} from "@angular/material/dialog";
import {PostService} from "../post.service";
import {Post} from "../post";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  posts?: Post[];

  constructor(private dialog:MatDialog,private postService:PostService) {

  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe((data)=>{
      this.posts = data;
    })
  }


  openAddPostComponent(): void {
    const dialogRef = this.dialog.open(AddPostComponent, {
      width: 'auto',
      height: 'auto',
      data : {
        action : 'add',
      },
      position: {
        top: '-20%',
        left: '10%'
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result){
        this.postService.insertPost(result).subscribe((post)=>{
          console.log(post);
          Swal.fire({
            title: 'Ajouté!',
            text: 'Votre post a été créé avec succès.',
            icon: 'success'
          }).then(() => {
            window.location.reload();
          });
        });
      }else
        Swal.fire({
          title: 'Erreur!',
          text: 'Veuillez verifiez vos informations, ',
          icon: 'error'
        }).then(() => {
          window.location.reload();
        });


    })
  }

  like(post:Post){
    post.nbrlike! += 1;
    this.postService.updatePost(post).subscribe((post)=>{
      console.log(post);
    });
  }

  dislike(post:Post){
    post.nbrdislike! +=1;
    this.postService.updatePost(post).subscribe((post)=>{
      console.log(post);
    });
  }

}
