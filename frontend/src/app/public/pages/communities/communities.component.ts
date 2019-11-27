import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GalleryModalComponent } from 'src/app/shared/modals/gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
  animations: [
    trigger('fade', [

      state('void', style({opacity: 0})),

      transition(':enter, :leave', [
        animate(2000)
      ])
    ])
  ]
})
export class CommunitiesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showImage(img: string) {
    this.dialog.open(GalleryModalComponent, {
      data: {name: img}
    });
  }

}
