import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/shared/Models/employee';
import { EmployeeService } from 'src/app/shared/Services/employee.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {

  employeeArr!:Array<IEmployee> 
  
  constructor(

    private _empService :EmployeeService
  ) { }

  ngOnInit(): void {

    this.getFetchData()
  }

getFetchData(){
  this._empService.fetchAllEmp()
  .subscribe({
    next : data=>{
      this.employeeArr = data
    },
    error: err =>{
      console.log(err)
    }
  })

}



///////////////////////////////////2////////////////////////////



// getFetchData(){
//   this._empService.fetchAllEmp()
//   .subscribe({
//     next : data=>{
//       this.employeeArr = data
//     },
//     error: err =>{
//       console.log(err)
//     }
//   })

// }





///////////////////////////////////3////////////////////////////



// getFetchData(){
//   this._empService.fetchAllEmp()
//   .subscribe({
//     next : data=>{
//       this.employeeArr = data
//     },
//     error: err =>{
//       console.log(err)
//     }
//   })

// }


}
