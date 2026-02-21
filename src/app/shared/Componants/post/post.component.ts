import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iposts } from '../../Models/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
 
  id!:string
 
  postObj!:Iposts
 
  constructor(
    private _postService: PostService,
    private _routes: ActivatedRoute,
    private _matDialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {
  this.getPostById()
    
  }
  getPostById(){
 
  this.id = this._routes.snapshot.params['id']
    if(this.id){
      this._postService.addPostWithId(this.id)
      .subscribe({
        next:data=>{
          this.postObj = data
        }
      })
      }
    } 

    onRemove(){
      //we will be using the mat dialog to show a confirmation dialog before deleting the post
      let matDialogRef = new MatDialogConfig()
      matDialogRef.width = "400px"
      matDialogRef.data = `Are you sure you want to remove this post with id ${this.id}?`;
      
      let matRef =this._matDialog.open(GetConfirmComponent, matDialogRef)
      
      // matRef.afterClosed()
      // .subscribe(flag=>{
      //   if(flag){
      //     //call the post service to remove the post
      //     this._postService.onRemove(this.id)
      //     .subscribe({
      //       next:data=>{
      //         //after removing the post we will be navigating to the home page
      //         this._router.navigate(['posts'])
      //       }
      //   }   )
      //   }
      // })
      matRef.afterClosed()
      .pipe(
        // filter(flag=>flag===true),
        filter(Boolean), //this will filter out the false value and only allow the true value to pass through
        switchMap (()=>{
          return this._postService.onRemove(this.id)

        })     
      )
      .subscribe({
        next:data=>{
          this._router.navigate(['posts'])
        }
    }   )
    }
  


  //   //////////////////////////////////////2////////////////////////////////////////////


  // getPostById(){
 
  // this.id = this._routes.snapshot.params['id']
  //   if(this.id){
  //     this._postService.addPostWithId(this.id)
  //     .subscribe({
  //       next:data=>{
  //         this.postObj = data
  //       }
  //     })
  //     }
  //   } 

  //   onRemove(){
  //     //we will be using the mat dialog to show a confirmation dialog before deleting the post
  //     let matDialogRef = new MatDialogConfig()
  //     matDialogRef.width = "400px"
  //     matDialogRef.data = `Are you sure you want to remove this post with id ${this.id}?`;
      
  //     let matRef =this._matDialog.open(GetConfirmComponent, matDialogRef)
  //     matRef.afterClosed()
  //     .pipe(
  //       // filter(flag=>flag===true),
  //       filter(Boolean), //this will filter out the false value and only allow the true value to pass through
  //       switchMap (()=>{
  //         return this._postService.onRemove(this.id)

  //       })     
  //     )
  //     .subscribe({
  //       next:data=>{
  //         this._router.navigate(['posts'])
  //       }
  //   }   )
  //   }
  
  


  //////////////////////////////////////////////////3////////////////////////////////////////////////




  // getPostById(){
 
  // this.id = this._routes.snapshot.params['id']
  //   if(this.id){
  //     this._postService.addPostWithId(this.id)
  //     .subscribe({
  //       next:data=>{
  //         this.postObj = data
  //       }
  //     })
  //     }
  //   } 

  //   onRemove(){
  //     
  //     let matDialogRef = new MatDialogConfig()
  //     matDialogRef.width = "400px"
  //     matDialogRef.data = `Are you sure you want to remove this post with id ${this.id}?`;
      
  //     let matRef =this._matDialog.open(GetConfirmComponent, matDialogRef)
  //     matRef.afterClosed()
  //     .pipe(
  //       // filter(flag=>flag===true),
  //       filter(Boolean), //this will filter out the false value and only allow the true value to pass through
  //       switchMap (()=>{
  //         return this._postService.onRemove(this.id)

  //       })     
  //     )
  //     .subscribe({
  //       next:data=>{
  //         this._router.navigate(['posts'])
  //       }
  //   }   )
  //   }
  
  
 
  //////////////////////////////////////////////4/////////////////////////////////////


 
  // this.id = this._routes.snapshot.params['id']
  //   if(this.id){
  //     this._postService.addPostWithId(this.id)
  //     .subscribe({
  //       next:data=>{
  //         this.postObj = data
  //       }
  //     })
  //     }
  //   } 

  //   onRemove(){
  //     //we will be using the mat dialog to show a confirmation dialog before deleting the post
  //     let matDialogRef = new MatDialogConfig()
  //     matDialogRef.width = "400px"
  //     matDialogRef.data = `Are you sure you want to remove this post with id ${this.id}?`;
      
  //     let matRef =this._matDialog.open(GetConfirmComponent, matDialogRef)
  //     matRef.afterClosed()
  //     .pipe(
  //       // filter(flag=>flag===true),
  //       filter(Boolean), //this will filter out the false value and only allow the true value to pass through
  //       switchMap (()=>{
  //         return this._postService.onRemove(this.id)

  //       })     
  //     )
  //     .subscribe({
  //       next:data=>{
  //         this._router.navigate(['posts'])
  //       }
  //   }   )
  //   }
  
  



  //////////////////////////////////////////////5/////////////////////////////////////


 
  // this.id = this._routes.snapshot.params['id']
  //   if(this.id){
  //     this._postService.addPostWithId(this.id)
  //     .subscribe({
  //       next:data=>{
  //         this.postObj = data
  //       }
  //     })
  //     }
  //   } 

  //   onRemove(){
  //     //we will be using the mat dialog to show a confirmation dialog before deleting the post
  //     let matDialogRef = new MatDialogConfig()
  //     matDialogRef.width = "400px"
  //     matDialogRef.data = `Are you sure you want to remove this post with id ${this.id}?`;
      
  //     let matRef =this._matDialog.open(GetConfirmComponent, matDialogRef)
  //     matRef.afterClosed()
  //     .pipe(
  //       // filter(flag=>flag===true),
  //       filter(Boolean), //this will filter out the false value and only allow the true value to pass through
  //       switchMap (()=>{
  //         return this._postService.onRemove(this.id)

  //       })     
  //     )
  //     .subscribe({
  //       next:data=>{
  //         this._router.navigate(['posts'])
  //       }
  //   }   )
  //   }
  
  
  }
