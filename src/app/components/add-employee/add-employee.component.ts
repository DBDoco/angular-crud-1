import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  @Output() onAddEmployee:EventEmitter<Employee>=new EventEmitter();

  id:number;
  ime:string;
  prezime:string;
  oib:number;
  showAddEmployee:boolean;
  subscription:Subscription;

  constructor(private uiService:UiService){ }
  ngOnInit() {
    this.subscription=this.uiService.subject.subscribe(value=> {
      this.showAddEmployee=value
      console.log(this.showAddEmployee)
    })
  }
  onSubmit(){
    if(!this.oib){
      alert('OIB nedostaje!')
      return;
    }

    const newEmployee={
      id:this.id,
      oib:this.oib,
      ime:this.ime,
      prezime:this.prezime
    }

    this.onAddEmployee.emit(newEmployee);
    this.ime='';
    this.prezime='';
    this.oib=null;
  }
}
