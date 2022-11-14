import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsModule } from './hotels/hotels.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactsComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, HotelsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
