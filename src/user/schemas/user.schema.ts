import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Company } from 'src/company/schemas/company.schema';
import { RoleEnum } from '../enums/role.enum';

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  role: RoleEnum;

  @Prop()
  salary: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company: Company;
}

export const UserSchema = SchemaFactory.createForClass(User);