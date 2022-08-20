import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) { }

  async saveUser(data) {
    try {
      const newUser = new this.userModel(data);
      newUser.save()

    } catch (error) {
      Logger.log(error)
    }
  }


}
