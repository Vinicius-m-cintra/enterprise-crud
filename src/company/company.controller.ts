import { Body, Controller, Get, Param, Post, Patch, Res, Delete, HttpStatus } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { GetCompanyDto } from './dto/get-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}
    @Post('/save')
    async createCompany(
        @Body() payload: CreateCompanyDto,
        @Res() res,
    ) {
        const response = await this.companyService.create(payload);

        return res.status(HttpStatus.CREATED).send(response);
    }

    @Get('')
    async getCompanies(@Res() res) {
        const response = await this.companyService.getAll();

        if(!response || !response.length) {
            return res.status(HttpStatus.NOT_FOUND).send("companies not found")
        }

        return res.status(HttpStatus.OK).send(response);
    }

    @Get('/:_id')
    async getCompany(@Res() res, @Param() param: GetCompanyDto) {
        const response = await this.companyService.getOne(param._id);

        if(!response) {
            return res.status(HttpStatus.NOT_FOUND).send("company not found")
        }

        return res.status(HttpStatus.OK).send(response);
    }

    @Patch('/:_id')
    async updateCompany(@Res() res, @Param() param: GetCompanyDto, @Body() payload: UpdateCompanyDto) {
        const response = await this.companyService.update(param._id, payload);

        if(!response) {
            return res.status(HttpStatus.NOT_FOUND).send("Company not found")
        }

        return res.status(HttpStatus.OK).send(response);
    }

    @Delete("/:_id")
    async deleteCompany(@Res() res, @Param() param: GetCompanyDto) {
        const response = await this.companyService.delete(param._id);

        if(!response) {
            return res.status(HttpStatus.NOT_FOUND).send("Company not found")
        }

        return res.status(HttpStatus.NO_CONTENT).send();
    }

    @Get('/users/:_id')
    async listUsers(@Res() res, @Param() param: GetCompanyDto) {
        const response = await this.companyService.listUsers(param._id);

        if(!response) {
            return res.status(HttpStatus.NOT_FOUND).send("Company not found")
        }

        return res.status(HttpStatus.OK).send(response);
    }
}
