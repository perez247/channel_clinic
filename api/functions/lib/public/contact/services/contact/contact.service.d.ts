import { SendEmailDTO } from '../../data/dto/sendEmailDTO';
export declare class ContactService {
    transporter: any;
    constructor();
    sentEmail(sendEmailDto: SendEmailDTO): Promise<any>;
    private initializeMailer;
    private setEmail;
}
