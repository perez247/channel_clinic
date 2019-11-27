import { NgModule } from '@angular/core';
import { PublicSharedModule } from './modules/public.shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    PublicSharedModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
