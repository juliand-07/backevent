import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/auth.guard';

@Controller()
export class AppController {
 
  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  getPerfil(@Request() req) {
    return req.user;
  }
}
