import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from '../company/schemas/company.schema';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(payload): Promise<any> {
    const createdUser = new this.userModel(payload);

    return createdUser.save();
  }

  async getAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getOne(_id: string) {
    try {
      const user = await this.userModel.findById(_id).populate("company");

      return user;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async update(_id: string, payload: UpdateUserDto) {
    const user = await this.getOne(_id);

    if (!user) {
      return undefined;
    }

    for (const key of Object.keys(payload)) {
      user[key] = payload[key];
    }

    return user.save();
  }

  async delete(_id: string) {
    const user = await this.getOne(_id);

    if (!user) {
      return undefined;
    }

    return user.delete();
  }

  async listBySeller(company: Company) {
    const users = await this.userModel.find({ company }).exec();

    return users;
  }
}
