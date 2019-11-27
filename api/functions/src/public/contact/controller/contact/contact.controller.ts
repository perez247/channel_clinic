import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ContactService } from '../../services/contact/contact.service';
import { SendEmailDTO } from '../../data/dto/sendEmailDTO';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  async sendEmail(@Body(new ValidationPipe()) sendEmailDto: SendEmailDTO) {
    return await this.contactService.sentEmail(sendEmailDto);
  }

}
