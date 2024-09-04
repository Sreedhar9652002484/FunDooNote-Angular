import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { UserService } from '../../services/User/user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,MatDividerModule,MatButtonModule,FormsModule,ReactiveFormsModule,MatSelectModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  firstName:string="";
  lastName:string="";
  email:string="";
  password:string=""; 

  constructor(private userService:UserService, private router:Router){}

  onSubmit(form:NgForm){
    let reqData={
      firstName:this.firstName,
      lastName:this.lastName,
      dateOfBirth:"2024-08-24T12:32:33.828Z",
      email:this.email,
      password:this.password
    }
    this.userService.Register(reqData).subscribe((res:any)=>{
      console.log(res);
      alert("Registered Successfully")
      this.router.navigateByUrl('/login')
    })
  }
}
