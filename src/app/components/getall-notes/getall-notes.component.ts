import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from '../../services/Notes/notes.service';
import { IconsComponentComponent } from '../icons-component/icons-component.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataserviceService } from '../../services/DataService/dataservice.service';
import { FilterPipe } from '../../Pipes/filter.pipe';

@Component({
  selector: 'app-getall-notes',
  standalone: true,
  imports: [
    IconsComponentComponent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatDialogModule,
    FilterPipe
  ],
  templateUrl: './getall-notes.component.html',
  styleUrls: ['./getall-notes.component.css'] // Fix for incorrect 'styleUrl' -> 'styleUrls'
})
export class GetallNotesComponent {

  @Input() notesList: any;
  @Output() refreshNotes = new EventEmitter<void>();
  @Output() refreshPinEvent = new EventEmitter<void>();

  message: any;
  filterNote: any;
  pinnedNotes: any;
  unPinnedNotes: any;

  constructor(
    private dialog: MatDialog, private notesService: NotesService, private data: DataserviceService) { }

  ngOnInit() {
    this.data.incomingData.subscribe((res) => {
      this.filterNote = res;
      console.log(this.filterNote);
      // Filter notes based on the isPin property
      //     console.log(this.notesList);
      // this.pinnedNotes = this.notesList.filter((note:any) => note.isPin === true);
      // this.unPinnedNotes = this.notesList.filter((note:any) => note.isPin === false);
    })
  }
  handleArchive(event: any) {
    console.log("Archive Event Received:", event);
    this.refreshNotes.emit();
  }

  handleTrash(event: any) {
    console.log("Trash Event Received:", event);
    this.refreshNotes.emit();
  }
  handleDelete(event: any) {
    console.log("Delete Event Received:", event);
    this.refreshNotes.emit();
  }

  handleColorChange(event: any) {
    console.log("Color Change Event Received:", event);
    this.refreshNotes.emit();
  }

  handleunArchive(event: any) {
    this.refreshNotes.emit();
  }

  handleUnTrash($event: any) {
    this.refreshNotes.emit();
  }

  handleImage($event: any) {
    this.refreshNotes.emit();
  }
  onPin(notesId: any) {
    this.notesService.isPin(notesId).subscribe((res: any) => {
      console.log(res);
      this.refreshNotes.emit();
    }, (error: any) => {
      console.log(error);
    })
  }
  editNoteDialogBox(notes: any) {
    if (notes.isArchive === false && notes.isTrash === false) {
      console.log(notes.isArchive);
      const dialogRef = this.dialog.open(UpdateNotesComponent, {
        height: 'auto',
        data: notes,
        panelClass: 'custom-dialog-container'
      });
      dialogRef.afterClosed().subscribe(result => {
        this.refreshNotes.emit(result);
        console.log(result);
      });
    }
  }
  receivedRefreshEvent(event: any) {
    this.message = event;
    this.refreshNotes.emit(event);

  }
}
