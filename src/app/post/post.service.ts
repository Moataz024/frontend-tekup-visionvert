import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "./post";
import {Router} from "@angular/router";
import {FactChecker} from "./FactChecker";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl : string = "http://localhost:8083/post";

  constructor(private http:HttpClient,private router:Router) {  }

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+"/");
  }

  insertPost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.baseUrl+"/",post);
  }

  updatePost(post:Post):Observable<Post> {
    return this.http.put<Post>(this.baseUrl+"/update",post);
  }

  refreshPage() {
    console.log(this.router.url);
    this.router.navigate(["/"]).then(() => {
      this.router.navigate([this.router.url]);
      console.log(this.router.url);
    });
  }

  informationFactChecker(post_text:string):Observable<FactChecker>{
    const requestBody = { post_text: post_text };
    return this.http.post<FactChecker>("http://localhost:3000/classify",requestBody);
  }
}
