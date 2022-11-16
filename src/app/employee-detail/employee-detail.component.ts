import { Component, OnInit } from '@angular/core';
import Employee from '../Employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee | undefined;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const employeeIdFromRoute = Number(routeParams.get('id'));

    this.employee = this.employeeService.findAll().find(e => e.getId() == employeeIdFromRoute);

  }

}
