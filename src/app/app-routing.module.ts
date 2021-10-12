import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { FocusareaComponent } from './components/focusarea/focusarea.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { KesavvComponent } from './components/pages/kesavv/kesavv.component';
import { RaghureddyComponent } from './components/pages/raghureddy/raghureddy.component';
import { RameshloganathanComponent } from './components/pages/rameshloganathan/rameshloganathan.component';
import { VasudevavarmaComponent } from './components/pages/vasudevavarma/vasudevavarma.component';
import { VenkatestcComponent } from './components/pages/venkatestc/venkatestc.component';
import { ViswanathkComponent } from './components/pages/viswanathk/viswanathk.component';
import { BtechComponent } from './components/people/btech/btech.component';
import { FacultyComponent } from './components/people/faculty/faculty.component';
import { InternComponent } from './components/people/intern/intern.component';
import { MsComponent } from './components/people/ms/ms.component';
import { PhdComponent } from './components/people/phd/phd.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { DatasetComponent } from './components/resources/dataset/dataset.component';
import { DemosComponent } from './components/resources/demos/demos.component';
import { DownloadsComponent } from './components/resources/downloads/downloads.component';
import { PosterComponent } from './components/resources/poster/poster.component';
import { ProjectsComponent } from './components/resources/projects/projects.component';
import { TeachingComponent } from './components/resources/teaching/teaching.component';
import { FacultydetailComponent } from './components/utils/detail/facultydetail/facultydetail.component';

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
  { path: 'detail/:id', component:  FacultydetailComponent},
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
  },
  {
    path: 'publications',
    component: PublicationsComponent
  },
  {
    path: 'resources',
        children: [
            {
                path: 'projects',
                component: ProjectsComponent
            },
            {
              path: 'teaching',
              component: TeachingComponent
            },
            {
              path: 'demos',
              component: DemosComponent
            },
            {
              path: 'downloads',
              component: DownloadsComponent
            },
            {
                path: 'dataset',
                component: DatasetComponent
            },
            {
              path: 'posters',
              component: PosterComponent
            }
        ]
  },
  {
    path: 'pages',
    children: [
        {
          path:'raghureddy',
          component: RaghureddyComponent
        },
        {
          path:'kesavv',
          component:KesavvComponent
        },
        {
          path:'rameshloganathan',
          component:RameshloganathanComponent
        },
        {
          path:'vasudevavarma',
          component:VasudevavarmaComponent
        },
        {
          path:'venkateshc',
          component:VenkatestcComponent
        },
        {
          path:'viswanathk',
          component:ViswanathkComponent
        }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
