import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpService) {}
  Register(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-Type':'application/json'
      })
    }
    return this.http.PostMethod('https://localhost:44371/api/User/register',reqData,false,header)
  }

    Login(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-Type':'application/json'
      })
    }
    return this.http.PostMethod('https://localhost:44371/api/User/login',reqData,false,header)
   }

   ForgotPassword(reqData:any){
    let header={
      headers: new HttpHeaders({
        'content-Type':'application/json'
      })
    }
    return this.http.PostMethodToken('https://localhost:44371/api/User/ForgetPassword?email='+reqData.email,{},false,header);
   }

   ResetPassword(reqData: any, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
  
    const body = {
      newPassword: reqData.newPassword,
      confirmPassword:reqData.repeatPassword
    };
  
    return this.http.PutMethod('https://localhost:44371/api/User/ResetPassword?NewPassword='+body.newPassword+'&ConfirmPass='+body.confirmPassword, {}, true, { headers });
  }
  

  
}
