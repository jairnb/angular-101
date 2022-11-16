import { Component, OnInit, Input } from '@angular/core';
import Employee from '../Employee';
import { EmployeeServiceService } from '../employee-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeServiceService]
})

export class EmployeeComponent implements OnInit {
  @Input() employees!: Array<Employee>;
  shippingCosts!: Observable<{ type: string, price: number }[]>;

  emp1: String[] = [];
  emp2: String[] = [];
  emp3: String[] = [];

  constructor(private eService : EmployeeServiceService) { }

  ngOnInit(): void {
    this.emp1 = this.eService.getInfoEmp1();
    this.shippingCosts =  this.eService.getShippingPrices();

    // console.log(this.employees)
  }

  // getInfoEmp1() {
  //   this.emp1 = this.eService.getInfoEmp1();
  // }

  getInfoEmp2() {
    this.emp2 = this.eService.getInfoEmp2();
  }

  getInfoEmp3() {
    this.emp3 = this.eService.getInfoEmp3();
  }

  addInfo(data: any): void {
    this.eService.addInfo(data);
  }

  findAll() : Array<Employee> {
    return this.eService.findAll();
  }

  

}
