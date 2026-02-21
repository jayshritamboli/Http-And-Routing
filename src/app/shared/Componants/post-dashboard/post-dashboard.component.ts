import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Services/post.service';
import { Iposts } from '../../Models/post';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

postsArr:Array<Iposts> = []
  
constructor(
  
    private _postService: PostService
  ) { }

  ngOnInit()
  : void {
    this.getPosts()
  }



  getPosts(){
    this._postService.fetchAllPosts()
    .subscribe({
      next:data =>{
        this.postsArr = data
    },
      error:err =>{
        console.log(err)
      }
      })

    }


/////////////////////////////////////2////////////////////////////////////////




  // getPosts(){
  //   this._postService.fetchAllPosts()
  //   .subscribe({
  //     next:data =>{
  //       this.postsArr = data
  //   },
  //     error:err =>{
  //       console.log(err)
  //     }
  //     })

  //   }
  // }



  
/////////////////////////////////////3////////////////////////////////////////




  // getPosts(){
  //   this._postService.fetchAllPosts()
  //   .subscribe({
  //     next:data =>{
  //       this.postsArr = data
  //   },
  //     error:err =>{
  //       console.log(err)
  //     }
  //     })

  //   }
  // }




  
/////////////////////////////////////4////////////////////////////////////////




  // getPosts(){
  //   this._postService.fetchAllPosts()
  //   .subscribe({
  //     next:data =>{
  //       this.postsArr = data
  //   },
  //     error:err =>{
  //       console.log(err)
  //     }
  //     })

  //   }
  // }




  
/////////////////////////////////////5////////////////////////////////////////


  // getPosts(){
  //   this._postService.fetchAllPosts()
  //   .subscribe({
  //     next:data =>{
  //       this.postsArr = data
  //   },
  //     error:err =>{
  //       console.log(err)
  //     }
  //     })

  //   }
  // }

  }

