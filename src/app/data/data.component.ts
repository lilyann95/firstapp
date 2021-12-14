import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  providers: [DataService]
})
export class DataComponent {

  USER_DATA: {firstname: string, lastname: string, email: string, contact: number}[]=[];

  constructor(private dservice: DataService) { }

  // ngOnInit() {
  //   this.USER_DATA = this.dservice.USER_DATA;
    
  // }

  getInfoFromService(){
    this.USER_DATA = this.dservice.USER_DATA;
  }
  
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'PhoneContact', 'action'];
  
  dataSource =this.dservice.USER_DATA;

}
