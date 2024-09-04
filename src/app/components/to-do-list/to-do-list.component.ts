import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,MatInput,MatButton],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
constructor(private formBuilder:FormBuilder){}

  ToDoForm!:FormGroup
  tasksArray:any[]=[];
  savedTasks : any;

  ngOnInit(): void
  {
    this.ToDoForm = this.formBuilder.group({
      task:['',[ Validators.required]]
    });

    this.savedTasks = localStorage.getItem('TaskList');
    if(this.savedTasks){
    this.tasksArray=JSON.parse(this.savedTasks);
    }
  }

  AddTask():void{
      let task = this.ToDoForm.value.task;
      let newTask={
        task:this.ToDoForm.value.task,
        completed:false
      }
      if(task){
        this.tasksArray.push(newTask);
        localStorage.setItem('TaskList', JSON.stringify(this.tasksArray));
        this.ToDoForm.reset();
      }
      console.log(task)
      console.log(this.tasksArray);
  }
  toggleTask(i:number){
    this.tasksArray[i].completed=!this.tasksArray[i].completed;
    localStorage.setItem('TaskList', JSON.stringify(this.tasksArray));

  }

  RemoveTask(){
    this.tasksArray.pop();
    // localStorage.removeItem('TaskList')
  }

}
