import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any;
  constructor(private httpService:HttpService) { this.token=localStorage.getItem('token')}

  addNotes(reqData:any){
    let header={
      headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  return this.httpService.PostMethodToken('https://localhost:44371/api/Notes/CreatingNote',reqData,true,header)
  }
  getAllNotes(){
    let header={
      headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization': 'Bearer ' + this.token
    })
  }
  return this.httpService.getService('https://localhost:44371/api/Notes/GetAllNotes',true,header)
}

isArchive(notesId:any){
  let header={
    headers:new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'Bearer ' + this.token
  })
}
console.log(notesId);
return this.httpService.PostMethodToken('https://localhost:44371/api/Notes/Archive?NotesId='+notesId,{},true,header)
}
unArchive(notesId:any){
  let header={
    headers:new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'Bearer ' + this.token
  })
}
console.log(notesId);
return this.httpService.PostMethodToken('https://localhost:44371/api/Notes/unArchive?NotesId='+notesId,{},true,header)
}

isTrash(notesId:any){
  let header={
    headers:new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'Bearer ' + this.token
  })
}
console.log(notesId);
return this.httpService.PostMethodToken('https://localhost:44371/api/Notes/Trash?NotesId='+notesId,{},true,header)
}
unTrash(notesId:any){
  let header={
    headers:new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'Bearer ' + this.token
  })
}
console.log(notesId);
return this.httpService.PostMethodToken('https://localhost:44371/api/Notes/unTrash?NotesId='+notesId,{},true,header)
}

isPin(notesId:any){
  let header={
    headers:new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'Bearer ' + this.token
  })
}
console.log(notesId);
return this.httpService.PostMethodToken('https://localhost:44371/api/Notes/Pin?NotesId='+notesId,{},true,header)
}

deleteNotes(notesId:any){
  let header={
    headers:new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'Bearer ' + this.token
  })
}
console.log(notesId);
return this.httpService.DeleteMethod('https://localhost:44371/api/Notes/DeleteNote?NotesId='+notesId,{},true,header)
}


setColor(reqData:any,){
  let header={
    headers:new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'Bearer ' + this.token
  })
}
const encodedColor = encodeURIComponent(reqData.color);

console.log("rew0",reqData)
return this.httpService.PatchMethod('https://localhost:44371/api/Notes/SetColour?NotesId='+reqData.notesId+'&Colour='+encodedColor,{},true,header)
}

updateNotes(reqData:any, notesId:any){
  let header={
    headers:new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'Bearer ' + this.token
  })
}

console.log("rew0",reqData)
return this.httpService.PatchMethod('https://localhost:44371/api/Notes/UpdateNotes?NotesId='+notesId,reqData,true,header)
}

AddImage(reqData:any,notesId:any){
  let header={
    headers:new HttpHeaders({
    'Authorization': 'Bearer ' + this.token
  })
}
console.log("rew0",reqData);
return this.httpService.PostMethodToken('https://localhost:44371/api/Notes/AddImage?notesId='+notesId,reqData,true,header)
}
}
