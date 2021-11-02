import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }    from './auth.guard';
import { UserResolver } from './util/user-resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'time',
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employees/employees.module').then(m => m.EmployeesModule),
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'members',
    loadChildren: () => import('./pages/members/members.module').then(m => m.MembersModule),
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'time',
    loadChildren: () => import('./pages/time/time.module').then(m => m.TimeModule),
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'reporting',
    loadChildren: () => import('./pages/reporting/reporting.module').then(m => m.ReportingModule),
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule),
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'programs',
    loadChildren: () => import('./pages/programs/programs.module').then(m => m.ProgramsModule),
    canActivate: [AuthGuard],
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
