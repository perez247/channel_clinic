import { NgModule } from '@angular/core';
import { AboutComponent } from '../pages/about/about.component';
import { HomeComponent } from '../pages/home/home.component';
import { PublicFullComponent } from '../layouts/public-full/public-full.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { PublicSideNaveBarComponent } from '../components/public-side-nave-bar/public-side-nave-bar.component';
import { CommunitiesComponent } from '../pages/communities/communities.component';
import { ContactComponent } from '../pages/contact/contact.component';

@NgModule({
  declarations: [
    ContactComponent,
    CommunitiesComponent,
    AboutComponent,
    HomeComponent,
    PublicFullComponent,
    WelcomeComponent,
    PublicSideNaveBarComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ContactComponent,
    CommunitiesComponent,
    SharedModule,
    AboutComponent,
    HomeComponent,
    PublicFullComponent,
    WelcomeComponent,
    PublicSideNaveBarComponent,
  ]
})

export class PublicSharedModule { }
