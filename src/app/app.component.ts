import { Component } from '@angular/core';
import { Employee } from './employee/employee.class';
import { EmployeeService } from './employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-service';

  employees: Employee[] = [];

  constructor(private emplsvc: EmployeeService) {
    this.emplsvc.list().subscribe(
      {
        next: (res) => { console.log(res); this.employees = res; },
        error: (err) => { console.error(err); }
      }
    );
  }
}
