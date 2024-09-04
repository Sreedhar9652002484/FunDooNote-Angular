
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { UserService } from '../../services/User/user.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,MatDividerModule,MatButtonModule,FormsModule,ReactiveFormsModule,MatSelectModule,
    CommonModule
  ],
 templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotPasswordComponent {
  forgotForm! : FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserService){}
  ngOnInit(): void 
  {
    this.forgotForm=this.formBuilder.group({
      email:['',[Validators.email, Validators.required]]
    });
  }
  forgotSubmit(){
    if (this.forgotForm.valid) {
      const reqData = {
        email: this.forgotForm.value.email
      };
      console.log(reqData);
      this.userService.ForgotPassword(reqData).subscribe((res: any) => {
        console.log(res);
        if(res){
          alert("Token Sent Succesful");
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}

