import { Component, Inject } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NotesService } from '../../services/Notes/notes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconsComponentComponent } from '../icons-component/icons-component.component';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-notes',
  standalone: true,
  imports: [IconsComponentComponent,MatCardModule,FormsModule,ReactiveFormsModule,MatIconModule,MatButtonModule,
    CommonModule
  ],
  templateUrl: './update-notes.component.html',
  styleUrl: './update-notes.component.css'
})
export class UpdateNotesComponent {
  title:any;
  takeaNote:any;
  id:any;
  color:any
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
public dialogbox: MatDialogRef<UpdateNotesComponent>,
private notes:NotesService){
  this.title=data.title,
  this.takeaNote=data.takeaNote,
  this.id=data.notesId,
  this.color=data.color
}

ngOnInit():void{
}

closeDialog(){
  let reqData={
    title:this.title,
    takeaNote:this.takeaNote,
    colour:this.color
  }
  console.log(this.data);
  this.notes.updateNotes(reqData, this.id).subscribe((res:any)=>{
    console.log(res);
    this.dialogbox.close();
  })
}
onTextareaInput(event: Event): void {
  const textarea = event.target as HTMLTextAreaElement;
  textarea.style.height = 'auto'; // Reset height to auto
  textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
}
}
