import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  BASE_URL: string = environment.Base_Url
  POST_URL :string = `${this.BASE_URL}/emps.json`

  constructor(
    private _http : HttpClient


  ) { }

  fetchAllEmp():Observable<any>{
   return  this._http.get<any>(this.POST_URL)
   .pipe(
        map(obj=>{
            let empArr : Array<any> =[]
          for (const key in obj) {
         empArr.unshift({...obj[key], id:key})   
          }
          return empArr
        })
   )
  }
  addEmp(empObj:IEmployee):Observable<{name : string}>{
   return this._http.post<any>(this.POST_URL,empObj)

  }


  addEmpWithId(id:string):Observable<IEmployee>{
    let post_url = `${this.BASE_URL}/emps/${id}.json`
    return  this._http.get<IEmployee>(post_url)
  }

onRemove(id:string):Observable<any>{
  let Remove_Url = `${this.BASE_URL}/emps/${id}.json`
  return this._http.delete(Remove_Url)
}

onUpdate(updatePost:IEmployee):Observable<IEmployee>{
let Update_Url = `${this.BASE_URL}/emps/${updatePost.id}.json`
  return this._http.patch<IEmployee>(Update_Url, updatePost)
}



//////////////////////////////////2///////////////////////////////////


// fetchAllEmp():Observable<any>{
//    return  this._http.get<any>(this.POST_URL)
//    .pipe(
//         map(obj=>{
//             let empArr : Array<any> =[]
//           for (const key in obj) {
//          empArr.unshift({...obj[key], id:key})   
//           }
//           return empArr
//         })
//    )
//   }
//   addEmp(empObj:IEmployee):Observable<{name : string}>{
//    return this._http.post<any>(this.POST_URL,empObj)

//   }


//   addEmpWithId(id:string):Observable<IEmployee>{
//     let post_url = `${this.BASE_URL}/emps/${id}.json`
//     return  this._http.get<IEmployee>(post_url)
//   }

// onRemove(id:string):Observable<any>{
//   let Remove_Url = `${this.BASE_URL}/emps/${id}.json`
//   return this._http.delete(Remove_Url)
// }

// onUpdate(updatePost:IEmployee):Observable<IEmployee>{
// let Update_Url = `${this.BASE_URL}/emps/${updatePost.id}.json`
//   return this._http.patch<IEmployee>(Update_Url, updatePost)
// }





//////////////////////////////////3///////////////////////////////////


// fetchAllEmp():Observable<any>{
//    return  this._http.get<any>(this.POST_URL)
//    .pipe(
//         map(obj=>{
//             let empArr : Array<any> =[]
//           for (const key in obj) {
//          empArr.unshift({...obj[key], id:key})   
//           }
//           return empArr
//         })
//    )
//   }
//   addEmp(empObj:IEmployee):Observable<{name : string}>{
//    return this._http.post<any>(this.POST_URL,empObj)

//   }


//   addEmpWithId(id:string):Observable<IEmployee>{
//     let post_url = `${this.BASE_URL}/emps/${id}.json`
//     return  this._http.get<IEmployee>(post_url)
//   }

// onRemove(id:string):Observable<any>{
//   let Remove_Url = `${this.BASE_URL}/emps/${id}.json`
//   return this._http.delete(Remove_Url)
// }

// onUpdate(updatePost:IEmployee):Observable<IEmployee>{
// let Update_Url = `${this.BASE_URL}/emps/${updatePost.id}.json`
//   return this._http.patch<IEmployee>(Update_Url, updatePost)
// }


}



