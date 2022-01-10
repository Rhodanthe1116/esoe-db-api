import { Auth } from 'src/auth/auth.decorator';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Auth(UserType.賣家)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Auth(UserType.賣家)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Auth(UserType.賣家)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }

  // @UseGuards(LocalAuthGuard)
  // @Post('signIn')
  // signIn(@Body() signInDto: SignInDto) {
  //   return this.usersService.signIn(signInDto);
  // }

  // @Get('me')
  // me(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }
}
