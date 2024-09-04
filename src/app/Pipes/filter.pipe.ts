import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})

export class FilterPipe implements PipeTransform {

  transform(value: any, filterNote:string){
      if (filterNote  === "") {
        return value;
      }
    const notes = [];
    for(const note of value){
      if (note.title.toLowerCase().includes(filterNote)) {
        notes.push(note);
      }else if(note.takeaNote.toLowerCase().includes(filterNote)){
        notes.push(note);
      }
    }
    console.log(notes);
    return notes;
  }

}
