import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyDocument, Company } from './schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
    private readonly userService: UserService
  ) {}

  async create(payload): Promise<any> {
    const createdCompany = new this.companyModel(payload);

    return createdCompany.save();
  }

  async getAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async getOne(_id: string) {
    try {
      const company = await this.companyModel.findById(_id);

      return company;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async update(_id: string, payload: UpdateCompanyDto) {
    const company = await this.getOne(_id);

    if (!company) {
      return undefined;
    }

    for (const key of Object.keys(payload)) {
      company[key] = payload[key];
    }

    return company.save();
  }

  async delete(_id: string) {
    const company = await this.getOne(_id);

    if (!company) {
      return undefined;
    }

    return company.delete();
  }

  async listUsers(_id: string) {
    const company = await this.getOne(_id);

    if (!company) {
      return undefined;
    };

    const users = await this.userService.listBySeller(company);

    return { company, users }
  }
}
