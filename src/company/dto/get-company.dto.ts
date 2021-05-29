import { IsNotEmpty } from "class-validator";

export class GetCompanyDto {
    @IsNotEmpty()
    _id: string;
}