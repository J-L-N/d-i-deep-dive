import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  // private tasksService: TasksService //this goes with the local instance

  constructor(private tasksService: TasksService) {
    // this.tasksService = new TasksService();// this has an issue of not having a local instance instead of general instance

  }

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({title: title, description: description});
    console.log('task', title)
    this.formEl()?.nativeElement.reset();
  }
}
