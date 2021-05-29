import { IsNotEmpty } from "class-validator";
import { RoleEnum } from "../enums/role.enum";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  role: RoleEnum;

  @IsNotEmpty()
  salary: number;

  @IsNotEmpty()
  company: string;
}