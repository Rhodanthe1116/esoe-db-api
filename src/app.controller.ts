import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignInDto } from './users/dto/sign-in.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiCreatedResponse({
    type: SignInResponseDto,
  })
  @Post('users/signIn')
  async login(
    @Request() req,
    @Body() signInDto: SignInDto,
  ): Promise<{
    id: number;
    token: string;
  }> {
    return this.authService.login(req.user);
  }
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
