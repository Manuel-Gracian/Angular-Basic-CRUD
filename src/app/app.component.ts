import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-simple-crud';
  employeeArray: Employee[] = [
    { id:1, name: "Ryan", country: "USA" },
    { id:2, name: "Juan", country: "Mexico" },
    { id:3, name: "Rocio", country: "Mexico" }
  ]

  // selectedEmployee : instancia de clase Employee
  selectedEmployee: Employee = new Employee();

  // cuando agregamos nuevo Employee incrementamos el id + 1
  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee(); // clear Employee
  }

  openForEdit(pEmployee: Employee){
    this.selectedEmployee = pEmployee
  }

  delete(){
    if(confirm(`Are you sure to want to delete it? ${this.selectedEmployee.name}`)){
    this.employeeArray = this.employeeArray.filter(x => x !== this.selectedEmployee);
    this.selectedEmployee = new Employee();
    }
  }
}
