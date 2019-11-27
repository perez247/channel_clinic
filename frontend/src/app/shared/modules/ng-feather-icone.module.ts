import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {  Home, Book, Sun, Phone, Airplay, Truck, Gift, Heart, UserX, Map, Mail, MessageCircle } from 'angular-feather/icons';

const icons = {
  Home, Book, Sun, Phone, Airplay, Truck, Gift, Heart, UserX, Mail, Map, MessageCircle
};

@NgModule({
  imports: [
    FeatherModule.pick(icons),
  ],
  exports: [
    FeatherModule
  ]
})

export class NgFeatherIconModule {}
