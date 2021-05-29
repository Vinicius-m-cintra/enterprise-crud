import { IsNotEmpty } from "class-validator";
import { Address } from "../schemas/address.entity";

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: Address;

  @IsNotEmpty()
  phone: string;
}