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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FocusareaComponent,
    PublicationsComponent,
    AdminComponent,
    PeopleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
