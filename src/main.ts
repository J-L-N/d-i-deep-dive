import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { TasksService } from './app/tasks/tasks.service';

export const TaskServiceToken = new InjectionToken<TasksService>('tesks-service-token');

bootstrapApplication(AppComponent, {
  providers: [{provide: TaskServiceToken, useClass: TasksService}]
});

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
