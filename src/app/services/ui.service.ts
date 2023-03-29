import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private ShowAddEmployee:boolean;
  subject=new Subject<any>();

  constructor() { }

  toggleAddEmployee(): void{
    this.ShowAddEmployee = !this.ShowAddEmployee;
    this.subject.next(this.ShowAddEmployee);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
