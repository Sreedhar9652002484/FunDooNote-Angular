import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NotesService } from '../../services/Notes/notes.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';





@Component({
  selector: 'app-icons-component',
  standalone: true,
  imports: [MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatMenuModule,
    MatTooltipModule
  ],
  templateUrl: './icons-component.component.html',
  styleUrl: './icons-component.component.css'
})
export class IconsComponentComponent {
  @Input() notesId: any;
  @Input() trash:any;
  @Input() archive:any;
  @Output() refrehArchiveEvent = new EventEmitter<string>();
  @Output() refreshunArchiveEvent = new EventEmitter<string>();
  @Output() refrehTrashEvent = new EventEmitter<string>();
  @Output() refreshDeleteEvent = new EventEmitter<string>();
  @Output() refreshUnTrashEvent = new EventEmitter<string>();
  @Output() refreshColorEvent = new EventEmitter<string>();
  @Output() refreshPinEvent = new EventEmitter<string>();
  @Output() refreshImageEvent = new EventEmitter<string>();



  constructor(private notesService: NotesService, private snackBar: MatSnackBar) { }

  onArchive() {
    console.log(this.notesId);
    this.notesService.isArchive(this.notesId).subscribe((res: any) => {
      console.log(res);
      this.refrehArchiveEvent.emit(res);
      this.openSnackBar("Notes Archived Successfully", "close")
    }, (error: any) => {
      console.log(error);
    }
    )
  }
  unArchive() {
    console.log(this.notesId);
    this.notesService.unArchive(this.notesId).subscribe((res: any) => {
      console.log(res);
      this.refreshunArchiveEvent.emit(res);
      this.openSnackBar("Notes UnArchived Successfully", "close")

    }, (error: any) => {
      console.log(error);
    }
    )
  }
  onTrash(){
    this.notesService.isTrash(this.notesId).subscribe((res: any) => {
      console.log(res);
      this.refrehTrashEvent.emit(res);
      this.openSnackBar("Notes Sent to Trash", "close")

    }, (error: any) => {
      console.log(error);
    }
    )
  }
  unTrash(){
    this.notesService.unTrash(this.notesId).subscribe((res: any) => {
      console.log(res);
      this.refreshUnTrashEvent.emit(res);
      this.openSnackBar("Notes Restored Successfully", "close")

    }, (error: any) => {
      console.log(error);
    }
    )
  }

  onDelete(){
    this.notesService.deleteNotes(this.notesId).subscribe((res:any)=>{
console.log(res);
this.refreshDeleteEvent.emit(res);
this.openSnackBar("Notes Deleted Successfully", "close")

    }, (error: any) => {
      console.log(error);
    })
    }

    

  
    colorArray:Array<any>=[
      { code: '#FFFF00', name: 'Yellow' },
  { code: '#D3D3D3', name: 'Grey' },
  { code: '#f0a8a1', name: 'Coral' },
  { code: '#f39f76', name: 'Peach' },
  { code: '#fff8b8', name: 'Sand' },
  { code: '#FFA500', name: 'Orange' },
  { code: '#FFC0CB', name: 'Pink' },
  { code: '#00FFFF', name: 'Cyan' },
  { code: '#FF69B4', name: 'Hot Pink' },      
  { code: '#e2f6d3', name: 'Mint' },
  { code: '#FFD700', name: 'Gold' },
  { code: '#FF6347', name: 'Tomato' },      
  { code: '#40E0D0', name: 'Turquoise' },     
  { code: '#DDA0DD', name: 'Plum' },          
  { code: '#8A2BE2', name: 'Blue Violet' },   
  { code: '#F08080', name: 'Light Coral' }    
    ];

    selectColor(colors:string){
      console.log(colors);
      let reqData={
        notesId:this.notesId,
        color:colors
      }
      console.log(reqData);
      this.notesService.setColor(reqData).subscribe((res:any)=>{
        console.log(res);
        this.refreshColorEvent.emit(res);
      },(error:any)=>{
        console.log(error);

      })
    }

    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];

        try {
       const formData = new FormData();
       formData.append('item', 'image');
       formData.append('imageFile', file);    

        this.notesService.AddImage(formData, this.notesId).subscribe((res:any)=>{
          console.log(res);

          this.refreshImageEvent.emit(res);

        },(error:any)=>{
          console.log(error);
        })
        console.log(file);
      }
         catch (error) {
          console.error('Error constructing FormData:', error);
        }
      }
      
    }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 3000, 
      });
    }
    
}
