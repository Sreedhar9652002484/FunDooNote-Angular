import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token: string | null;

  constructor(private httpClient:HttpClient) {this.token=localStorage.getItem('token') }

  PostMethod(reqUrl:string, payload:any, token:boolean=false,httpOptions:any={}){
    return this.httpClient.post(reqUrl,payload,token && httpOptions)
  }
  PostMethodToken(reqUrl:string, payload:any, token:boolean=true, httpOptions:any={}){
    return this.httpClient.post(reqUrl,payload,token && httpOptions)
  }
  getService(reqUrl:string, token:boolean=true, httpOptions:any={}){
    return this.httpClient.get(reqUrl,token && httpOptions)
  }
  PutMethod(reqUrl: string, payload: any, token: boolean = true, httpOptions: any = {}) {
    return this.httpClient.put(reqUrl, payload, token ? httpOptions : {});
  }
  PatchMethod(reqUrl:string, payload:any, token:boolean=true, httpOptions:any={}){
    return this.httpClient.patch(reqUrl,payload,token && httpOptions)
  }

  DeleteMethod(reqUrl: string, payload: any, token: boolean = true, httpOptions: any = {}) {
// If token-based authorization is required, add the token to the headers
  
  httpOptions.headers = httpOptions.headers || new HttpHeaders();
  httpOptions.headers = httpOptions.headers.set('Authorization', `Bearer ${this.token}`);

// Add the payload to the body of the request
httpOptions.body = payload;

// Send the DELETE request with the URL and the options object
return this.httpClient.delete(reqUrl, httpOptions);  }
}
