import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FocusareaComponent } from './components/focusarea/focusarea.component';
import { HomeComponent } from './components/home/home.component';
import { BtechComponent } from './components/people/btech/btech.component';
import { FacultyComponent } from './components/people/faculty/faculty.component';
import { InternComponent } from './components/people/intern/intern.component';
import { MsComponent } from './components/people/ms/ms.component';
import { PhdComponent } from './components/people/phd/phd.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'focusarea',
    component: FocusareaComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'people',
        children: [
            {
                path: 'faculty',
                component: FacultyComponent
            },
            {
              path: 'phd-students',
              component: PhdComponent
            },
            {
              path: 'ms-students',
              component: MsComponent
            },
            {
                path: 'btech-students',
                component: BtechComponent
            },
            {
              path: 'project-interns',
              component: InternComponent
            }
        ]
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
