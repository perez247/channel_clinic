import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app/shared/routes/app.routes';
import { PublicFullComponent } from './layouts/public-full/public-full.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import { CommunitiesComponent } from './pages/communities/communities.component';
import { ContactComponent } from './pages/contact/contact.component';

// Get the whole routes of the app
const appRoutes = AppRoutes.generateRoutes();

const routes: Routes = [
  {
    path: '',
    redirectTo: appRoutes.public.welcome.name,
    pathMatch: 'full',
  },
  {
    path: '',
    component: PublicFullComponent,
    children: [
      {
        path: appRoutes.public.welcome.name,
        component: WelcomeComponent,
      },
      {
        path: appRoutes.public.about.name,
        component: AboutComponent
      },
      {
        path: appRoutes.public.community.name,
        component: CommunitiesComponent
      },
      {
        path: appRoutes.public.contact.name,
        component: ContactComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
