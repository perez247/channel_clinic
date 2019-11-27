import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendEmailDTO {

  @IsEmail()
  readonly sender!: string;

  @IsNotEmpty()
  readonly message!: string;

  @IsNotEmpty()
  readonly name!: string;
}
