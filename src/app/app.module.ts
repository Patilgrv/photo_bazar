import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import {
  DropDownListModule,
  ComboBoxModule,
  AutoCompleteModule,
  MultiSelectModule,
  ListBoxModule,
  DropDownTreeModule,
  MentionModule,
} from '@syncfusion/ej2-angular-dropdowns';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DropDownListModule,
    ComboBoxModule,
    AutoCompleteModule,
    MultiSelectModule,
    ListBoxModule,
    DropDownTreeModule,
    MentionModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
