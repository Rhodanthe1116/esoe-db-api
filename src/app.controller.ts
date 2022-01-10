import { Role, UserType } from 'src/users/entities/user.entity';

import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';

import { AppService } from './app.service';
import { Auth } from './auth/auth.decorator';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Public } from './decorators/public.decorator';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignInDto } from './users/dto/sign-in.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
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

  @Auth(UserType.買家, UserType.賣家)
  @Get('users/me')
  getProfile(@Request() req) {
    return req.user;
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
