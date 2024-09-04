import { Component } from '@angular/core';
import { NotesService } from '../../services/Notes/notes.service';
import { GetallNotesComponent } from '../getall-notes/getall-notes.component';
import { CreateNotesComponent } from '../create-notes/create-notes.component';
@Component({
  selector: 'app-notes-container',
  standalone: true,
  imports: [GetallNotesComponent,CreateNotesComponent],
  templateUrl: './notes-container.component.html',
  styleUrl: './notes-container.component.css'
})
export class NotesContainerComponent {
  notesArray:any
  constructor(private notes:NotesService){}
  ngOnInit(){
    this.getAllNotes();
  }
  getAllNotes(){
    this.notes.getAllNotes().subscribe((res:any)=>{
      console.log(res);
      this.notesArray=res.data;
      this.notesArray = this.notesArray.filter((note:any)=>{
        return note.isArchive == false;
      })
      this.notesArray = this.notesArray.filter((note:any)=>{
        return note.isTrash == false;
      })
      
      this.notesArray.reverse();
    })
  }

  addNoteEvent($event:any){
    console.log("emmiting newly added notes",+$event)
    this.getAllNotes();
  }

  refreshNotes(){
    this.getAllNotes();
  }
}
