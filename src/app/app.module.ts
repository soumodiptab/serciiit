import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PeopleInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
