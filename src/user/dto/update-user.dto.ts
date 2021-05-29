import { IsOptional } from "class-validator";
import { RoleEnum } from "../enums/role.enum";

export class UpdateUserDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  role?: RoleEnum;

  @IsOptional()
  salary?: number;
}