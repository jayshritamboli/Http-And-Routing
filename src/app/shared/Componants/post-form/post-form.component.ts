import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../Services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iposts } from '../../Models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  isInEditMode : boolean = false;
  postForm !: FormGroup;  
  postId !: string;
  postObj!: Iposts;
  constructor(
    private _postService: PostService,
    private _router: Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createPostForm();
    this.patchPostData();
  }


  patchPostData(){
    this.postId = this._routes.snapshot.params['id'] 
    if(this.postId){
      this.isInEditMode = true;
      this._postService.addPostWithId(this.postId)
        .subscribe({
          next:data=>{
            this.postObj = data;
            this.postForm.patchValue(data);
          },
          error:err=>{
            console.log(err)
          }
        })
    }
  }

  onPostUpdate(){
    if(this.postForm.valid){
      let Updated_Obj:Iposts = {...this.postForm.value, id: this.postId};
      this._postService.onUpdate(Updated_Obj)
        .subscribe({
          next:data=>{
            console.log(data)
            this.postForm.reset();
            this._router.navigate(['/posts'])
          },
          error:err=>{
            console.log(err)
          }
        })
    }
  }
  createPostForm(){
    this.postForm = new FormGroup({
      title : new FormControl(null,[Validators.required]),
      content : new FormControl(null,[Validators.required]),
      userId : new FormControl(null,[Validators.required]),

    })

  }
  onPostAdd(){
    if(this.postForm.valid){
      let POST_OBJ=this.postForm.value;
      this._postService.addPost(POST_OBJ)
        .subscribe({
          next:data=>{
            console.log(data)
            this.postForm.reset();
            this._router.navigate(['/posts'])
          },
          error :err=>{
            console.log(err)
          }
        })
      
      
    }
   
  }





  //////////////////////////////////////////2////////////////////////////////////


  
  // patchPostData(){
  //   this.postId = this._routes.snapshot.params['id'] 
  //   if(this.postId){
  //     this.isInEditMode = true;
  //     this._postService.addPostWithId(this.postId)
  //       .subscribe({
  //         next:data=>{
  //           this.postObj = data;
  //           this.postForm.patchValue(data);
  //         },
  //         error:err=>{
  //           console.log(err)
  //         }
  //       })
  //   }
  // }

  // onPostUpdate(){
  //   if(this.postForm.valid){
  //     let Updated_Obj:Iposts = {...this.postForm.value, id: this.postId};
  //     this._postService.onUpdate(Updated_Obj)
  //       .subscribe({
  //         next:data=>{
  //           console.log(data)
  //           this.postForm.reset();
  //           this._router.navigate(['/posts'])
  //         },
  //         error:err=>{
  //           console.log(err)
  //         }
  //       })
  //   }
  // }
  // createPostForm(){
  //   this.postForm = new FormGroup({
  //     title : new FormControl(null,[Validators.required]),
  //     content : new FormControl(null,[Validators.required]),
  //     userId : new FormControl(null,[Validators.required]),

  //   })

  // }
  // onPostAdd(){
  //   if(this.postForm.valid){
  //     let POST_OBJ=this.postForm.value;
  //     this._postService.addPost(POST_OBJ)
  //       .subscribe({
  //         next:data=>{
  //           console.log(data)
  //           this.postForm.reset();
  //           this._router.navigate(['/posts'])
  //         },
  //         error :err=>{
  //           console.log(err)
  //         }
  //       })
      
      
  //   }
   
  // }




  
  //////////////////////////////////////////3////////////////////////////////////


  
  // patchPostData(){
  //   this.postId = this._routes.snapshot.params['id'] 
  //   if(this.postId){
  //     this.isInEditMode = true;
  //     this._postService.addPostWithId(this.postId)
  //       .subscribe({
  //         next:data=>{
  //           this.postObj = data;
  //           this.postForm.patchValue(data);
  //         },
  //         error:err=>{
  //           console.log(err)
  //         }
  //       })
  //   }
  // }

  // onPostUpdate(){
  //   if(this.postForm.valid){
  //     let Updated_Obj:Iposts = {...this.postForm.value, id: this.postId};
  //     this._postService.onUpdate(Updated_Obj)
  //       .subscribe({
  //         next:data=>{
  //           console.log(data)
  //           this.postForm.reset();
  //           this._router.navigate(['/posts'])
  //         },
  //         error:err=>{
  //           console.log(err)
  //         }
  //       })
  //   }
  // }
  // createPostForm(){
  //   this.postForm = new FormGroup({
  //     title : new FormControl(null,[Validators.required]),
  //     content : new FormControl(null,[Validators.required]),
  //     userId : new FormControl(null,[Validators.required]),

  //   })

  // }
  // onPostAdd(){
  //   if(this.postForm.valid){
  //     let POST_OBJ=this.postForm.value;
  //     this._postService.addPost(POST_OBJ)
  //       .subscribe({
  //         next:data=>{
  //           console.log(data)
  //           this.postForm.reset();
  //           this._router.navigate(['/posts'])
  //         },
  //         error :err=>{
  //           console.log(err)
  //         }
  //       })
      
      
  //   }
   
  // }




  
  //////////////////////////////////////////4////////////////////////////////////


  
  // patchPostData(){
  //   this.postId = this._routes.snapshot.params['id'] 
  //   if(this.postId){
  //     this.isInEditMode = true;
  //     this._postService.addPostWithId(this.postId)
  //       .subscribe({
  //         next:data=>{
  //           this.postObj = data;
  //           this.postForm.patchValue(data);
  //         },
  //         error:err=>{
  //           console.log(err)
  //         }
  //       })
  //   }
  // }

  // onPostUpdate(){
  //   if(this.postForm.valid){
  //     let Updated_Obj:Iposts = {...this.postForm.value, id: this.postId};
  //     this._postService.onUpdate(Updated_Obj)
  //       .subscribe({
  //         next:data=>{
  //           console.log(data)
  //           this.postForm.reset();
  //           this._router.navigate(['/posts'])
  //         },
  //         error:err=>{
  //           console.log(err)
  //         }
  //       })
  //   }
  // }
  // createPostForm(){
  //   this.postForm = new FormGroup({
  //     title : new FormControl(null,[Validators.required]),
  //     content : new FormControl(null,[Validators.required]),
  //     userId : new FormControl(null,[Validators.required]),

  //   })

  // }
  // onPostAdd(){
  //   if(this.postForm.valid){
  //     let POST_OBJ=this.postForm.value;
  //     this._postService.addPost(POST_OBJ)
  //       .subscribe({
  //         next:data=>{
  //           console.log(data)
  //           this.postForm.reset();
  //           this._router.navigate(['/posts'])
  //         },
  //         error :err=>{
  //           console.log(err)
  //         }
  //       })
      
      
  //   }
   
  // }




  
  //////////////////////////////////////////5////////////////////////////////////


  
  // patchPostData(){
  //   this.postId = this._routes.snapshot.params['id'] 
  //   if(this.postId){
  //     this.isInEditMode = true;
  //     this._postService.addPostWithId(this.postId)
  //       .subscribe({
  //         next:data=>{
  //           this.postObj = data;
  //           this.postForm.patchValue(data);
  //         },
  //         error:err=>{
  //           console.log(err)
  //         }
  //       })
  //   }
  // }

  // onPostUpdate(){
  //   if(this.postForm.valid){
  //     let Updated_Obj:Iposts = {...this.postForm.value, id: this.postId};
  //     this._postService.onUpdate(Updated_Obj)
  //       .subscribe({
  //         next:data=>{
  //           console.log(data)
  //           this.postForm.reset();
  //           this._router.navigate(['/posts'])
  //         },
  //         error:err=>{
  //           console.log(err)
  //         }
  //       })
  //   }
  // }
  // createPostForm(){
  //   this.postForm = new FormGroup({
  //     title : new FormControl(null,[Validators.required]),
  //     content : new FormControl(null,[Validators.required]),
  //     userId : new FormControl(null,[Validators.required]),

  //   })

  // }
  // onPostAdd(){
  //   if(this.postForm.valid){
  //     let POST_OBJ=this.postForm.value;
  //     this._postService.addPost(POST_OBJ)
  //       .subscribe({
  //         next:data=>{
  //           console.log(data)
  //           this.postForm.reset();
  //           this._router.navigate(['/posts'])
  //         },
  //         error :err=>{
  //           console.log(err)
  //         }
  //       })
      
      
  //   }
   
  // }

  
}
