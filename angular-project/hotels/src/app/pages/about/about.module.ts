import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule],
  providers: [],
  bootstrap: [],
})
export class AboutModule {}
