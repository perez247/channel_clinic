import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {  Home, Book, Sun, Phone, Airplay, Truck, Gift, Heart, UserX, Map, Mail, MessageCircle, Circle } from 'angular-feather/icons';

const icons = {
  Home, Book, Sun, Phone, Airplay, Truck, Gift, Heart, UserX, Mail, Map, MessageCircle, Circle
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
