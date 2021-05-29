import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/cep/:cep')
  async getCep(@Res() res, @Param() param) {
    const response = await this.appService.findCep(param.cep);

    return res.status(200).send(response);
  }
}
