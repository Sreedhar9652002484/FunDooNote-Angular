import { Component, EventEmitter, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { IconsComponentComponent } from '../icons-component/icons-component.component';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesService } from '../../services/Notes/notes.service';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-create-notes',
  standalone: true,
  imports: [MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    CreateNotesComponent,IconsComponentComponent,ReactiveFormsModule,MatCardModule],
  templateUrl: './create-notes.component.html',
  styleUrl: './create-notes.component.css'
})
export class CreateNotesComponent {
  toggle: boolean = true;
  noteTaking!:FormGroup;
  @Output() refreshAddNoteEvent = new EventEmitter<string>();

  constructor(private formBuilder:FormBuilder, private notesService:NotesService){}
  toggleView() {
    this.toggle = !this.toggle;
  }
 
  ngOnInit():void{
    this.noteTaking = this.formBuilder.group({
      title:[''],
      takeanote:['']
    })
  }
  noteSubmit(): void {
    if (this.noteTaking.valid) {
      const title = this.noteTaking.value.title;
      const takeanote = this.noteTaking.value.takeanote;
  
      if (title && takeanote) { 
        const reqData = {
          title,
          takeanote
        };
        console.log(reqData);
        this.notesService.addNotes(reqData).subscribe((res: any) => {
          console.log(res);
          this.refreshAddNoteEvent.emit(res);
           // Clear the form after successful submission
           this.noteTaking.reset();
          
        }, (error: any) => {
          console.error('notes creation failed:', error);
        });
      } else {
        console.log('Please provide both title and note content.');
      }
    } else {
      console.log('Form is invalid');
    }
    this.toggle = !this.toggle;

  }
  onTextareaInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reset height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
  }
}
