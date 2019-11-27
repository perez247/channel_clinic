import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fade', [

      state('void', style({opacity: 0})),

      transition(':enter, :leave', [
        animate(2000)
      ])
    ])
  ]
})
// hello
export class ContactComponent implements OnInit {

  sendEmailForm: FormGroup;

  lat = 4.4516;
  lng = 7.1707;

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {
    this.initializeSendEmailForm();
  }

  initializeSendEmailForm() {
    this.sendEmailForm = this.fb.group({
      sender: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required]],
      message: [null, [Validators.required]]
    });
  }

  clearForm(form: NgForm) {
    this.sendEmailForm.reset();
    this.sendEmailForm.markAsPristine();
  }

  sendEmail() {
    this.contactService.sendEmail(this.sendEmailForm.value).subscribe((result) => {
      console.log(result);
      this.sendEmailForm.reset();
    },
      error => console.log(error)
    );
  }

}
