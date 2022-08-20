import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './users.schema';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('')
  async saveUser(@Body() data: User) {
    const result = this.usersService.saveUser(data);
    return {
      success: true,
      payload: result
    }
  }
}
