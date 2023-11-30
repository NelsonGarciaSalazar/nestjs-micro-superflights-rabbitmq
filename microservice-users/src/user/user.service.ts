import { HttpStatus, Injectable } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { IUser } from '../common/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { USER } from '../common/models/models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) {}

  async checkPassword(password: string, passwordBD: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordBD);
  }

  async findByUsername(username: string) {
    return this.model.findOne({ username });
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async create(userDTO: UserDTO): Promise<IUser> {
    const hash = await this.hashPassword(userDTO.password);
    const newUser = new this.model({ ...userDTO, password: hash });
    return await newUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return this.model.find();
  }

  async findOne(id: string): Promise<IUser> {
    return this.model.findById(id);
  }

  async update(id: string, userDTO: UserDTO): Promise<IUser> {
    const hash = await this.hashPassword(userDTO.password);
    const user = { ...userDTO, password: hash };
    return this.model.findByIdAndUpdate(id, user, { new: true });
  }
  async delete(id: string): Promise<{ msg: string; status: HttpStatus }> {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Deleted' };
  }
}
