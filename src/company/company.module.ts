import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { UserService } from '../user/user.service';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanySchema, Company } from './schemas/company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService, UserService],
})
export class CompanyModule {}
