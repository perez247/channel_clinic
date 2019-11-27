import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgFeatherIconModule } from './modules/ng-feather-icone.module';
import { NgMaterialModule } from './modules/ng-material.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { GalleryModalComponent } from './modals/gallery-modal/gallery-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact/contact.service';

@NgModule({
  declarations: [
    GalleryModalComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    NgFeatherIconModule,
    NgMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.map
    })
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
    NgFeatherIconModule,
    NgMaterialModule,
    AgmCoreModule,
  ],
  entryComponents: [
    GalleryModalComponent
  ],
  providers: [
    ContactService
  ]
})
export class SharedModule { }
