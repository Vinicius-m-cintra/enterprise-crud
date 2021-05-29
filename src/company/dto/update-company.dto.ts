import { IsOptional } from "class-validator";
import { Address } from "../schemas/address.entity";

export class UpdateCompanyDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  address?: Address;

  @IsOptional()
  phone?: string;
}