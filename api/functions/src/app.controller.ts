import { Controller, All, NotFoundException } from '@nestjs/common';

@Controller('app')
export class AppController {
  @All()
  genericFunction() {
    throw new NotFoundException();
  }
}
