import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribe } from 'diagnostics_channel';
import { IEmployee } from 'src/app/shared/Models/employee';
import { EmployeeService } from 'src/app/shared/Services/employee.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent implements OnInit {

isInEditMode : boolean =false;

empForm!:FormGroup
empId !: string;
empObj!: IEmployee;

  constructor(

    private _empService:EmployeeService,
    private _router : Router,
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createEmpForm()
    this.patchEmpData()
  }

createEmpForm(){

  this.empForm = new FormGroup({
    title : new FormControl(null,[Validators.required]),
    avatar : new FormControl(null,[Validators.required]),
    email : new FormControl(null,[Validators.required]),
    role : new FormControl(null,[Validators.required]),
    salary : new FormControl(null,[Validators.required]),

  })

}



onEmpAdd(){
if(this.empForm.valid){
  let empObj = this.empForm.value
  this._empService.addEmp(empObj)
  .subscribe({
    next : data=>{
      console.log(data);
      this.empForm.reset()
      this._router.navigate(['/emps'])
    },
    error :err=>{
      console.log(err);
      
    }

})
}

}

patchEmpData(){
    this.empId = this._routes.snapshot.params['id'] 
    if(this.empId){
      this.isInEditMode = true;
      this._empService.addEmpWithId(this.empId)
        .subscribe({
          next:data=>{
            this.empObj = data;
            this.empForm.patchValue(data);
          },
          error:err=>{
            console.log(err)
          }
        })
    }
  }

  onEmpUpdate(){
    if(this.empForm.valid){
      let Updated_Obj:IEmployee = {...this.empForm.value, id: this.empId};
      this._empService.onUpdate(Updated_Obj)
        .subscribe({
          next:data=>{
            console.log(data)
            this.empForm.reset();
            this._router.navigate(['/emps'])
          },
          error:err=>{
            console.log(err)
          }
        })
    }
  }



 
  

   ////////////////////////////////////2//////////////////////////////////


//   createEmpForm(){

//   this.empForm = new FormGroup({
//     title : new FormControl(null,[Validators.required]),
//     avatar : new FormControl(null,[Validators.required]),
//     email : new FormControl(null,[Validators.required]),
//     role : new FormControl(null,[Validators.required]),
//     salary : new FormControl(null,[Validators.required]),

//   })

// }



// onEmpAdd(){
// if(this.empForm.valid){
//   let empObj = this.empForm.value
//   this._empService.addEmp(empObj)
//   .subscribe({
//     next : data=>{
//       console.log(data);
//       this.empForm.reset()
//       this._router.navigate(['/emps'])
//     },
//     error :err=>{
//       console.log(err);
      
//     }

// })
// }

// }

// patchEmpData(){
//     this.empId = this._routes.snapshot.params['id'] 
//     if(this.empId){
//       this.isInEditMode = true;
//       this._empService.addEmpWithId(this.empId)
//         .subscribe({
//           next:data=>{
//             this.empObj = data;
//             this.empForm.patchValue(data);
//           },
//           error:err=>{
//             console.log(err)
//           }
//         })
//     }
//   }

//   onEmpUpdate(){
//     if(this.empForm.valid){
//       let Updated_Obj:IEmployee = {...this.empForm.value, id: this.empId};
//       this._empService.onUpdate(Updated_Obj)
//         .subscribe({
//           next:data=>{
//             console.log(data)
//             this.empForm.reset();
//             this._router.navigate(['/emps'])
//           },
//           error:err=>{
//             console.log(err)
//           }
//         })
//     }
//   }




   ////////////////////////////////////3//////////////////////////////////


//   createEmpForm(){

//   this.empForm = new FormGroup({
//     title : new FormControl(null,[Validators.required]),
//     avatar : new FormControl(null,[Validators.required]),
//     email : new FormControl(null,[Validators.required]),
//     role : new FormControl(null,[Validators.required]),
//     salary : new FormControl(null,[Validators.required]),

//   })

// }



// onEmpAdd(){
// if(this.empForm.valid){
//   let empObj = this.empForm.value
//   this._empService.addEmp(empObj)
//   .subscribe({
//     next : data=>{
//       console.log(data);
//       this.empForm.reset()
//       this._router.navigate(['/emps'])
//     },
//     error :err=>{
//       console.log(err);
      
//     }

// })
// }

// }

// patchEmpData(){
//     this.empId = this._routes.snapshot.params['id'] 
//     if(this.empId){
//       this.isInEditMode = true;
//       this._empService.addEmpWithId(this.empId)
//         .subscribe({
//           next:data=>{
//             this.empObj = data;
//             this.empForm.patchValue(data);
//           },
//           error:err=>{
//             console.log(err)
//           }
//         })
//     }
//   }

//   onEmpUpdate(){
//     if(this.empForm.valid){
//       let Updated_Obj:IEmployee = {...this.empForm.value, id: this.empId};
//       this._empService.onUpdate(Updated_Obj)
//         .subscribe({
//           next:data=>{
//             console.log(data)
//             this.empForm.reset();
//             this._router.navigate(['/emps'])
//           },
//           error:err=>{
//             console.log(err)
//           }
//         })
//     }
//   }



}


