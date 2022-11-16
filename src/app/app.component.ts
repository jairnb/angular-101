import { Component } from '@angular/core';
import { EmployeeRepository } from './employee-repository';
import Employee from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [EmployeeRepository]
})
export class AppComponent {
  title = 'my-first-project';
  // employeeList: Array<Employee> = new Array();

  // constructor(private emp: EmployeeRepository) {
    
  // }

  ngOnInit(): void {
    // this.employeeList = this.emp.findAll()
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
