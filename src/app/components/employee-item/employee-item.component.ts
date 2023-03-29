import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent {
  @Input() employee:Employee;
  @Output() onDeleteEmployee: EventEmitter<Employee> = new EventEmitter();

  faTimes=faTimes;

  onDelete(employee){
    this.onDeleteEmployee.emit(employee);
  }
}
