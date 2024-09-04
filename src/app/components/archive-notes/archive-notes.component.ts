import { Component } from '@angular/core';
import { NotesService } from '../../services/Notes/notes.service';
import { GetallNotesComponent } from '../getall-notes/getall-notes.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-archive-notes',
  standalone: true,
  imports: [GetallNotesComponent,MatIconModule,CommonModule],
  templateUrl: './archive-notes.component.html',
  styleUrl: './archive-notes.component.css'
})
export class ArchiveNotesComponent {
  notesArray:any
  constructor(private notesService:NotesService){}
  ngOnInit(){
    this.ArchiveNotes();
  }
  ArchiveNotes(){
    this.notesService.getAllNotes().subscribe((res:any)=>{
      console.log(res);
      this.notesArray=res.data

      this.notesArray=this.notesArray.filter((obj:any)=>{
        return obj.isArchive == true && obj.isTrash == false;
      })
    })
  }
  refreshNotes(){
    this.ArchiveNotes();
  }
}
