import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iposts } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BaseUrl : string= environment.Base_Url;
  PostUrl:string=`${this.BaseUrl}/blogs.json`
  constructor(
    private _http: HttpClient
  ) { }


  fetchAllPosts():Observable<any>{
    return this._http.get<any>(this.PostUrl)
    .pipe(
      map(obj=>{
        let postArr:Array<any> = []
        for (const key in obj) {
          postArr.unshift({...obj[key], id:key})
        }
       return postArr
      })
  
    )
  }

addPost(postObj: Iposts):Observable<{name: string}>{
  return this._http.post<any>(this.PostUrl, postObj)
}

addPostWithId(id:string):Observable<Iposts>{
  let Post_Url = `${this.BaseUrl}/blogs/${id}.json`
  return this._http.get<Iposts>(Post_Url)

} 

onRemove(id:string):Observable<any>{
  let Remove_Url = `${this.BaseUrl}/blogs/${id}.json`
  return this._http.delete(Remove_Url)
}

onUpdate(updatePost:Iposts):Observable<Iposts>{
let Update_Url = `${this.BaseUrl}/blogs/${updatePost.id}.json`
  return this._http.patch<Iposts>(Update_Url, updatePost)
}






///////////////////////////////////////2///////////////////////////////////////



// BaseUrl : string= environment.Base_Url;
//   PostUrl:string=`${this.BaseUrl}/blogs.json`
//   constructor(
//     private _http: HttpClient
//   ) { }


//   fetchAllPosts():Observable<any>{
//     return this._http.get<any>(this.PostUrl)
//     .pipe(
//       map(obj=>{
//         let postArr:Array<any> = []
//         for (const key in obj) {
//           postArr.unshift({...obj[key], id:key})
//         }
//        return postArr
//       })
  
//     )
//   }

// addPost(postObj: Iposts):Observable<{name: string}>{
//   return this._http.post<any>(this.PostUrl, postObj)
// }

// addPostWithId(id:string):Observable<Iposts>{
//   let Post_Url = `${this.BaseUrl}/blogs/${id}.json`
//   return this._http.get<Iposts>(Post_Url)

// } 

// onRemove(id:string):Observable<any>{
//   let Remove_Url = `${this.BaseUrl}/blogs/${id}.json`
//   return this._http.delete(Remove_Url)
// }

// onUpdate(updatePost:Iposts):Observable<Iposts>{
// let Update_Url = `${this.BaseUrl}/blogs/${updatePost.id}.json`
//   return this._http.patch<Iposts>(Update_Url, updatePost)
// }
  




//////////////////////////////////////////////3//////////////////////////////////////////


// BaseUrl : string= environment.Base_Url;
//   PostUrl:string=`${this.BaseUrl}/blogs.json`
//   constructor(
//     private _http: HttpClient
//   ) { }


//   fetchAllPosts():Observable<any>{
//     return this._http.get<any>(this.PostUrl)
//     .pipe(
//       map(obj=>{
//         let postArr:Array<any> = []
//         for (const key in obj) {
//           postArr.unshift({...obj[key], id:key})
//         }
//        return postArr
//       })
  
//     )
//   }

// addPost(postObj: Iposts):Observable<{name: string}>{
//   return this._http.post<any>(this.PostUrl, postObj)
// }

// addPostWithId(id:string):Observable<Iposts>{
//   let Post_Url = `${this.BaseUrl}/blogs/${id}.json`
//   return this._http.get<Iposts>(Post_Url)

// } 

// onRemove(id:string):Observable<any>{
//   let Remove_Url = `${this.BaseUrl}/blogs/${id}.json`
//   return this._http.delete(Remove_Url)
// }

// onUpdate(updatePost:Iposts):Observable<Iposts>{
// let Update_Url = `${this.BaseUrl}/blogs/${updatePost.id}.json`
//   return this._http.patch<Iposts>(Update_Url, updatePost)
// }




///////////////////////////////////////////////4///////////////////////////////////////////////




// BaseUrl : string= environment.Base_Url;
//   PostUrl:string=`${this.BaseUrl}/blogs.json`
//   constructor(
//     private _http: HttpClient
//   ) { }


//   fetchAllPosts():Observable<any>{
//     return this._http.get<any>(this.PostUrl)
//     .pipe(
//       map(obj=>{
//         let postArr:Array<any> = []
//         for (const key in obj) {
//           postArr.unshift({...obj[key], id:key})
//         }
//        return postArr
//       })
  
//     )
//   }

// addPost(postObj: Iposts):Observable<{name: string}>{
//   return this._http.post<any>(this.PostUrl, postObj)
// }

// addPostWithId(id:string):Observable<Iposts>{
//   let Post_Url = `${this.BaseUrl}/blogs/${id}.json`
//   return this._http.get<Iposts>(Post_Url)

// } 

// onRemove(id:string):Observable<any>{
//   let Remove_Url = `${this.BaseUrl}/blogs/${id}.json`
//   return this._http.delete(Remove_Url)
// }

// onUpdate(updatePost:Iposts):Observable<Iposts>{
// let Update_Url = `${this.BaseUrl}/blogs/${updatePost.id}.json`
//   return this._http.patch<Iposts>(Update_Url, updatePost)
// }




/////////////////////////////////////////////5//////////////////////////////////////////



// BaseUrl : string= environment.Base_Url;
//   PostUrl:string=`${this.BaseUrl}/blogs.json`
//   constructor(
//     private _http: HttpClient
//   ) { }


//   fetchAllPosts():Observable<any>{
//     return this._http.get<any>(this.PostUrl)
//     .pipe(
//       map(obj=>{
//         let postArr:Array<any> = []
//         for (const key in obj) {
//           postArr.unshift({...obj[key], id:key})
//         }
//        return postArr
//       })
  
//     )
//   }

// addPost(postObj: Iposts):Observable<{name: string}>{
//   return this._http.post<any>(this.PostUrl, postObj)
// }

// addPostWithId(id:string):Observable<Iposts>{
//   let Post_Url = `${this.BaseUrl}/blogs/${id}.json`
//   return this._http.get<Iposts>(Post_Url)

// } 

// onRemove(id:string):Observable<any>{
//   let Remove_Url = `${this.BaseUrl}/blogs/${id}.json`
//   return this._http.delete(Remove_Url)
// }

// onUpdate(updatePost:Iposts):Observable<Iposts>{
// let Update_Url = `${this.BaseUrl}/blogs/${updatePost.id}.json`
//   return this._http.patch<Iposts>(Update_Url, updatePost)
// }
}
