import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB_URL,
      { useNewUrlParser: true },
    ),
    CompanyModule,
    UserModule,
    HttpModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
