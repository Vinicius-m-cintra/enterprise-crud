import { Body, Controller, Get, Param, Post, Patch, Res, Delete, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post('/save')
    async createUser(
        @Body() payload: CreateUserDto,
        @Res() res,
    ) {
        const response = await this.userService.create(payload);

        return res.status(HttpStatus.CREATED).send(response);
    }

    @Get('')
    async getUsers(@Res() res) {
        const response = await this.userService.getAll();

        if(!response || !response.length) {
            return res.status(HttpStatus.NOT_FOUND).send("users not found")
        }

        return res.status(HttpStatus.OK).send(response);
    }

    @Get('/:_id')
    async getUser(@Res() res, @Param() param: GetUserDto) {
        const response = await this.userService.getOne(param._id);

        if(!response) {
            return res.status(HttpStatus.NOT_FOUND).send("user not found")
        }

        return res.status(HttpStatus.OK).send(response);
    }

    @Patch('/:_id')
    async updateUser(@Res() res, @Param() param: GetUserDto, @Body() payload: UpdateUserDto) {
        const response = await this.userService.update(param._id, payload);

        if(!response) {
            return res.status(HttpStatus.NOT_FOUND).send("User not found")
        }

        return res.status(HttpStatus.OK).send(response);
    }

    @Delete("/:_id")
    async deleteUser(@Res() res, @Param() param: GetUserDto) {
        const response = await this.userService.delete(param._id);

        if(!response) {
            return res.status(HttpStatus.NOT_FOUND).send("user not found")
        }

        return res.status(HttpStatus.NO_CONTENT).send();
    }
}
