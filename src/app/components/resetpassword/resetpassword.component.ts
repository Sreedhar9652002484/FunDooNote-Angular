import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from '../../services/User/user.service';
import { CommonModule } from '@angular/common'; // Add this import
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'] // Corrected the typo
})
export class ResetPasswordComponent {
  resetForm!: FormGroup; 
  token:any;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      currentPassword: ['',[Validators.required]],
      newPassword: ['',[Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
      ]]
    });
    this.token=this.activatedRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  
  resetSubmit() {
    let reqData={
      newPassword:this.resetForm.value.currentPassword,
      repeatPassword:this.resetForm.value.newPassword
    }
    console.log(reqData);
    this.userService.ResetPassword(reqData, this.token).subscribe(
      (response: any) => {
        console.log('Password reset successful:', response);
        alert("password reset successful");
      },
      (error: any) => {
        console.error('Password reset failed:', error);
      }
    );
  }
}
