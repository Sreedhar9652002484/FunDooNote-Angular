import { Component } from '@angular/core';

import {MatInputModule} from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { UserService } from '../../services/User/user.service';
import { CommonModule } from '@angular/common'; // Add this import
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,MatDividerModule,MatButtonModule,FormsModule,ReactiveFormsModule,MatSelectModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor (private  userService:UserService, private route:Router,private snackBar: MatSnackBar){
  }
  onSubmit(form:NgForm) {
    let reqData={
      email:this.email,
      password:this.password
    }
    this.userService.Login(reqData).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem("token", res.data);
      sessionStorage.setItem("token", res.data);
      this.openSnackBar('User Logged In successfully!', 'Close');
      this.route.navigateByUrl("home/notes")
    },(error:any)=>{
      console.log(error);
      this.openSnackBar('Invalid Credentials', 'Retry');

    })
    console.log('Form Submitted:', form.value);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 3000, 
  });
}


createAccount(){
  this.route.navigateByUrl('register');
}
}
