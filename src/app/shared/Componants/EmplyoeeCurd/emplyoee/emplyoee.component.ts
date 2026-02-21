import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/shared/Models/employee';
import { EmployeeService } from 'src/app/shared/Services/employee.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-emplyoee',
  templateUrl: './emplyoee.component.html',
  styleUrls: ['./emplyoee.component.scss']
})
export class EmplyoeeComponent implements OnInit {
 
  id !:string

  empObj!:IEmployee


  constructor(
    private _empServices : EmployeeService,
    private _router : Router,
    private _routes :ActivatedRoute,
    private _matDialog :MatDialog
  ) { }

  ngOnInit(): void {
    this.getEmpById()
  }


  getEmpById(){
      this.id = this._routes.snapshot.params['id']
      if(this.id){
        this._empServices.addEmpWithId(this.id)
        .subscribe({
          next: data=>{
            this.empObj = data
          }
        })
      }
  }

     onRemove(){
      
      let matDialogRef = new MatDialogConfig()
      matDialogRef.width = "400px"
      matDialogRef.data = `Are you sure you want to remove this post with id ${this.id}?`;
      
      let matRef =this._matDialog.open(GetConfirmComponent, matDialogRef)
      matRef.afterClosed()
      .pipe(
        filter(Boolean), 
        switchMap (()=>{
          return this._empServices.onRemove(this.id)

        })     
      )
      .subscribe({
        next:data=>{
          this._router.navigate(['emps'])
        }
    }   )
    }
  

    ///////////////////////////////////2/////////////////////////////////


    
  // getEmpById(){
  //     this.id = this._routes.snapshot.params['id']
  //     if(this.id){
  //       this._empServices.addEmpWithId(this.id)
  //       .subscribe({
  //         next: data=>{
  //           this.empObj = data
  //         }
  //       })
  //     }
  // }

  //    onRemove(){
      
  //     let matDialogRef = new MatDialogConfig()
  //     matDialogRef.width = "400px"
  //     matDialogRef.data = `Are you sure you want to remove this post with id ${this.id}?`;
      
  //     let matRef =this._matDialog.open(GetConfirmComponent, matDialogRef)
  //     matRef.afterClosed()
  //     .pipe(
  //       filter(Boolean), 
  //       switchMap (()=>{
  //         return this._empServices.onRemove(this.id)

  //       })     
  //     )
  //     .subscribe({
  //       next:data=>{
  //         this._router.navigate(['emps'])
  //       }
  //   }   )
  //   }



  
    ///////////////////////////////////3/////////////////////////////////


    
  // getEmpById(){
  //     this.id = this._routes.snapshot.params['id']
  //     if(this.id){
  //       this._empServices.addEmpWithId(this.id)
  //       .subscribe({
  //         next: data=>{
  //           this.empObj = data
  //         }
  //       })
  //     }
  // }

  //    onRemove(){
      
  //     let matDialogRef = new MatDialogConfig()
  //     matDialogRef.width = "400px"
  //     matDialogRef.data = `Are you sure you want to remove this post with id ${this.id}?`;
      
  //     let matRef =this._matDialog.open(GetConfirmComponent, matDialogRef)
  //     matRef.afterClosed()
  //     .pipe(
  //       filter(Boolean), 
  //       switchMap (()=>{
  //         return this._empServices.onRemove(this.id)

  //       })     
  //     )
  //     .subscribe({
  //       next:data=>{
  //         this._router.navigate(['emps'])
  //       }
  //   }   )
  //   }
}
