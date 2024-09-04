import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotPasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ReviewformComponent } from './components/reviewform/reviewform.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { AuthGuard } from './shared/authguard.guard';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetPasswordComponent
  },
  {
    path: 'reviewform',
    component: ReviewformComponent
  },
  {
    path: 'todolist',
    component: ToDoListComponent
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
      },
      {
        path: 'notes',
        component: NotesContainerComponent
      },
      {
        path: 'archive',
        component: ArchiveNotesComponent
      },
      {
        path: 'trash',
        component: TrashNotesComponent
      }
    ]
  }
];
