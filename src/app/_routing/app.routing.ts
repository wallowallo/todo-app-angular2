import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from '../log-in/index';
import { SignUpComponent } from '../sign-up/index';
import { TodoComponent } from '../todo/index';

import { AuthGuard } from '../_guards/index';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'log-in',  component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/todo' }
];

export const routing = RouterModule.forRoot(appRoutes);
