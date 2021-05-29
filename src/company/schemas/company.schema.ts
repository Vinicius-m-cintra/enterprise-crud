import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address } from './address.entity';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop()
  name: string;

  @Prop()
  address: Address;

  @Prop()
  phone: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);