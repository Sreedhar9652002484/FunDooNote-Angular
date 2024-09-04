import { Component } from '@angular/core';
import { NotesService } from '../../services/Notes/notes.service';
import { GetallNotesComponent } from '../getall-notes/getall-notes.component';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-trash-notes',
  standalone: true,
  imports: [GetallNotesComponent,MatButton,MatIconModule,CommonModule],
  templateUrl: './trash-notes.component.html',
  styleUrl: './trash-notes.component.css'
})
export class TrashNotesComponent {
  notesArray:any
  constructor(private notesService:NotesService){}
  ngOnInit(){
   this.TrashNotes();
  }
  TrashNotes(){
    this.notesService.getAllNotes().subscribe((res:any)=>{
      console.log(res);
      this.notesArray=res.data
      this.notesArray=this.notesArray.filter((obj:any)=>{
        return obj.isTrash == true && obj.isArchive == false;
      })
    })
  }
  refreshNotes(){
    this.TrashNotes();
  }
}
