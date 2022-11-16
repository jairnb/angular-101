import { Injectable } from '@angular/core';
import Employee from './Employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeRepository {

    findAll() : Array<Employee> {
        return [
            new Employee("kikas", 1),
            new Employee("Kayla", 2),
        ];
    }

}
    
