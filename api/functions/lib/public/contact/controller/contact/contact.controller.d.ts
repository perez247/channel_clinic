import { ContactService } from '../../services/contact/contact.service';
import { SendEmailDTO } from '../../data/dto/sendEmailDTO';
export declare class ContactController {
    private contactService;
    constructor(contactService: ContactService);
    sendEmail(sendEmailDto: SendEmailDTO): Promise<any>;
}
