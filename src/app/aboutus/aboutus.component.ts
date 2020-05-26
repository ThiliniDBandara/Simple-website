import { Component, OnInit } from '@angular/core';

export interface Employee {
  id:string;
  name:string;
  email:string;
  password:string;
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
 employees: Employee[] = [
   {
     id: '1',
     name: 'Thilini Bandara',
     email: 'thilini@gmail.com',
     password: '1234'
   },
   {
     id: '2',
     name: 'Sasitha Vismith',
     email: 'sasitha@gmail.com',
     password: '12345'
   },
   {
     id: '3',
     name: 'Lahiru Kumara',
     email: 'lahiru@gmail.com',
     password: '123'
   },
   {
    id: '4',
    name: 'Lakshika Madushani',
    email: 'lakshika@gmail.com',
    password: '123456'
   }
 ];
  constructor() { }

  ngOnInit(): void {
  }
 

}
