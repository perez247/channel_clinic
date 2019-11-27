import { Module } from '@nestjs/common';
import { ContactModule } from './public/contact/contact.module';
import { AppController } from './app.controller';

@Module({
  imports: [ContactModule],
  controllers: [AppController],
})
export class AppModule {
}
