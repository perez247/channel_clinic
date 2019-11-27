import { Module } from '@nestjs/common';
import { ContactService } from './services/contact/contact.service';
import { ContactController } from './controller/contact/contact.controller';

@Module({
  controllers: [ContactController],
  providers: [ContactService]
})
export class ContactModule {}
