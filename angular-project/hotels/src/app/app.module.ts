import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsModule } from './hotels/hotels.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactsGuard } from './pages/contacts/guard/contacts.guard';
import { PipesComponent } from './pages/pipes/pipes.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import ar from '@angular/common/locales/ar';
import ru from '@angular/common/locales/ru';
import { MyCustomPipePipe } from './pipes/my-custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NavigationComponent,
    PipesComponent,
    MyCustomPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HotelsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [ContactsGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    [fr, ar, ru].forEach(registerLocaleData);
  }
}
