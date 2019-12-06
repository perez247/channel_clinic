import { Injectable } from '@nestjs/common';
import { SendEmailDTO } from '../../data/dto/sendEmailDTO';
import * as nodemail from 'nodemailer';
import * as functions from 'firebase-functions';

@Injectable()
export class ContactService {

  public transporter: any;

  constructor() {
    this.initializeMailer();
  }

  async sentEmail(sendEmailDto: SendEmailDTO): Promise<any> {
    return new Promise((resolve, reject) => {

      this.transporter.sendMail(this.setEmail(sendEmailDto), (erro: any, info: any) => {
        if (erro) {
          reject(erro);
        }

        resolve(info);
      })
    })
  }

  private initializeMailer() {
    this.transporter = nodemail.createTransport({
      service: 'gmail',
      auth: {
        user: functions.config().app.email,
        pass: functions.config().app.password
      }
    });
  }

  private setEmail(sendEmailDto: SendEmailDTO) {
    return {
      from: `From Website <${sendEmailDto.sender}>`,
      to: `channelclinicandhospital@gmail.com`,
      subject: `Enquiry from ${sendEmailDto.name}`,
      html: `
        <h3>Enquiry made from your website</h3>
        <p><b>Name of user:</b> ${sendEmailDto.name}</p>
        <p><b>Email of user:</b> ${sendEmailDto.sender}</p>
        <p><b>Message from user:</b> ${sendEmailDto.message}</p>
        `
    }
  }

}
