import { Component, OnInit, HostListener } from '@angular/core';
declare let $: any;
import { AppRoutes } from 'src/app/shared/routes/app.routes';

@Component({
  selector: 'app-public-side-nave-bar',
  templateUrl: './public-side-nave-bar.component.html',
  styleUrls: ['./public-side-nave-bar.component.css']
})
export class PublicSideNaveBarComponent implements OnInit {

  appRoutes = AppRoutes.generateRoutes();
  small = false;

  constructor() { }

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.small = window.innerWidth <= 990;
  }

  initializeWidth() {
    this.small = window.innerWidth <= 990;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event) {
    const opened = $('.collapse').hasClass('show');

    if (opened){
      $('button.navbar-toggler').click();

    }
  }

}
