import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  /* Load Balance - Balanceador de carga → servidor */

  @Get('ping')
  ping(): string{
    return 'pong';
  }
 
}
