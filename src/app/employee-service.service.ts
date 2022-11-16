import { Injectable } from '@angular/core';
import Employee from './Employee';
import { EmployeeRepository } from './employee-repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {

  employees: Employee[] = [];

  emp1: String[] = ["John", '1', 'j@j.com']
  emp2: String[] = ["Steve", '2', 's@s.com']
  emp3: String[] = ["Mike", '3', 'm@m.com']

  constructor(private employeeRep: EmployeeRepository, private http: HttpClient) { }

  findAll(): Array<Employee> {
    return this.employeeRep.findAll();
  }

  getShippingPrices() {
    let r = this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    return r;
  }

  getInfoEmp1() : String[] {
    return this.emp1;
  }

  getInfoEmp2() : String[] {
    return this.emp2;
  }

  getInfoEmp3() : String[] {
    return this.emp3;
  }

  addInfo(data: any): void {
    this.emp1.push(data.value.location);
    this.emp2.push(data.value.location);
    this.emp3.push(data.value.location);
  }
  
  

}
