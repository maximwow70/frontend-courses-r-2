import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/components/hotels/hotels.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactsGuard } from './pages/contacts/guard/contacts.guard';
import { HomeComponent } from './pages/home/home.component';
import { PipesComponent } from './pages/pipes/pipes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hotels',
    component: HotelsComponent,
  },
  {
    path: 'hotels/:id',
    component: HotelsComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [ContactsGuard],
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'about-me',
    redirectTo: 'about',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
