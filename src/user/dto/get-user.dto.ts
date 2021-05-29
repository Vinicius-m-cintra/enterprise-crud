import { IsNotEmpty } from "class-validator";

export class GetUserDto {
    @IsNotEmpty()
    _id: string;
}