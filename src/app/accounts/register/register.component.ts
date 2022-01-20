import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmpasswordService } from '../../shared/Services/confirmpassword.service';
import { DataService } from '../../shared/Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [DataService]
})

export class RegisterComponent  {
  
  constructor(
    private fb: FormBuilder, 
    private dservice: DataService
  ) {}

  registerForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    Confirmpassword: ['', [Validators.required]],
    PhoneContact: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]]
    }, 
    ConfirmpasswordService.mustMatch('password', 'Confirmpassword')
  ); 
  

  onsubmit(){
    console.log(this.registerForm.value);
    // this.dservice.addUsers(this.firstName, this.lastName, this.email, this.contact);
  }
} 