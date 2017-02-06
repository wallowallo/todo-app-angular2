import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from '../log-in/index';
import { SignUpComponent } from '../sign-up/index';
import { TodoComponent } from '../todo/index';
import { AuthGuard } from '../_guards/index';

const appRoutes: Routes = [
  { path: '/',  component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
