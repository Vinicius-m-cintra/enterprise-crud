import { IsNotEmpty, IsOptional } from "class-validator";

export class Address {
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  province: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  zipcode: string;

  @IsNotEmpty()
  district: string;
  
  @IsOptional()
  complement?: string;
}
