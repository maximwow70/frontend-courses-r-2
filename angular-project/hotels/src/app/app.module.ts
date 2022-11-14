import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsModule } from './hotels/hotels.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactsGuard } from './pages/contacts/guard/contacts.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HotelsModule, FormsModule],
  providers: [ContactsGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
