import { Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN, PHONE_NUMBER_PATTERN } from 'src/utils/helpers';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})

export class RegisterFormComponent {
  @Output() submit = new EventEmitter();
  emailMessage?: string = '';
  isSubmitted:boolean = false;
  message?: string;

  constructor(
    private fb: FormBuilder, 
  ) {}

  registerForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    PhoneContact: [
      '',
      [Validators.required, Validators.pattern(PHONE_NUMBER_PATTERN)]
    ],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    terms: [false, [Validators.requiredTrue]],
    agreements: [false, [Validators.required]],
    Confirmpassword: ['', [Validators.required]],
  }); 

  ngOnInit(): void {
    this.clearIfEmailExits();
  }

  clearIfEmailExits() {
    this.registerForm.get('email')?.valueChanges.subscribe(() => {
      this.emailMessage='';
    })
  }
  
  isFormSubmitted(message: boolean) {
    this.submit.emit(message);
  }

  onsubmit(){
    this.isSubmitted = true;
    this.isFormSubmitted(this.isSubmitted)
    // console.log(this.registerForm.value);
  }
  
  submitForm() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      this.isSubmitted = false;
      return;
    }
  }
}

// .update()?.subscribe({ next: () => {}, error: ()=> {} }); to the service this.service<name>
