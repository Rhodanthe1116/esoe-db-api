import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepo.save(createUserDto);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepo.save({ id, ...updateUserDto });
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }

  signIn(signInDto: SignInDto): Promise<User> {
    return this.userRepo.save(signInDto);
  }
}
