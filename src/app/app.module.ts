import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FocusareaComponent } from './components/focusarea/focusarea.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { AdminComponent } from './components/admin/admin.component';
import { PeopleCardComponent } from './components/util/people-card/people-card.component';
import { FacultyComponent } from './components/people/faculty/faculty.component';
import { PhdComponent } from './components/people/phd/phd.component';
import { MsComponent } from './components/people/ms/ms.component';
import { BtechComponent } from './components/people/btech/btech.component';
import { InternComponent } from './components/people/intern/intern.component';
import { PeopleInputComponent } from './components/util/people-input/people-input.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './components/resources/projects/projects.component';
import { TeachingComponent } from './components/resources/teaching/teaching.component';
import { DownloadsComponent } from './components/resources/downloads/downloads.component';
import { DemosComponent } from './components/resources/demos/demos.component';
import { DatasetComponent } from './components/resources/dataset/dataset.component';
import { PosterComponent } from './components/resources/poster/poster.component';
import { ContactComponent } from './components/contact/contact.component';
import { StudentCardComponent } from './components/util/student-card/student-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FacultydetailComponent } from './components/utils/detail/facultydetail/facultydetail.component';
import { NewsComponent } from './components/news/news.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FocusareaComponent,
    PublicationsComponent,
    AdminComponent,
    PeopleCardComponent,
    FacultyComponent,
    PhdComponent,
    MsComponent,
    BtechComponent,
    InternComponent,
    PeopleInputComponent,
    ProjectsComponent,
    TeachingComponent,
    DownloadsComponent,
    DemosComponent,
    DatasetComponent,
    PosterComponent,
    ContactComponent,
    StudentCardComponent,
    FacultydetailComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTwitterTimelineModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
