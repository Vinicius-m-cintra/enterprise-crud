import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor (
    private readonly httpService: HttpService,
  ) {}
  async findCep(cep) {
    const address = await this.httpService.get(`https://viacep.com.br/ws/${cep}/json`).toPromise();

    return address.data;
  }
}
