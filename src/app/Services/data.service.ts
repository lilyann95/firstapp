import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})



// let ELEMENT_DATA: periodicElement[] = [

// ];

export class DataService {

   USER_DATA = [
    {firstname: 'Frank', lastname: 'smith', email: 'fs@gmail.com', contact: +25677255666 },
    {firstname: 'Robin', lastname: 'daniels', email: 'rd@gmail.com', contact: +25677255666},
    {firstname: 'Adam', lastname: 'williams', email: 'aw@gmail.com', contact: +25677255666},
    {firstname: 'Daniel', lastname: 'scott', email: 'ds@gmail.com', contact: +25677255666},
    {firstname: 'William', lastname: 'Boron', email: 'wb@gmail.com', contact: +25677255666}
   
  ];
  addUsers(firstname: string, lastname: string, email: string, contact: number){
    this.USER_DATA.push({firstname, lastname, email, contact});
  }
}
