import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SendEmailDTO } from './contact.data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = environment.api;

  constructor(private http: HttpClient) { }

  sendEmail(data: SendEmailDTO) {
    return this.http.post(`${this.api}contact`, data);
  }
}
