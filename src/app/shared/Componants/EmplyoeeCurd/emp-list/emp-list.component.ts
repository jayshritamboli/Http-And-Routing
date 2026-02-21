import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/shared/Models/employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

 @Input() employeeArr!:IEmployee[];

  displayedColumns: string[] = ['title','email','role','salary','details'];

  constructor() { }

  ngOnInit(): void {
  }


  
}
