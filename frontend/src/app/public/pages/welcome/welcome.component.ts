import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/shared/routes/app.routes';
import { trigger, state, style, transition, animate } from '@angular/animations';

// declare var $: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  animations: [
    trigger('fade', [

      state('void', style({opacity: 0})),

      transition(':enter, :leave', [
        animate(2000)
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  appRoutes = AppRoutes.generateRoutes();

  constructor() { }

  ngOnInit() {
  }

}
