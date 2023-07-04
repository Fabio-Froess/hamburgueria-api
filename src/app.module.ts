import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PaoModule } from './pao/pao.module';
import { CarneModule } from './carne/carne.module';
import { OpcionalModule } from './opcional/opcional.module';
import { StatusModule } from './status/status.module';
import { BurgersModule } from './burgers/burgers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PaoModule,
    CarneModule,
    OpcionalModule,
    StatusModule,
    BurgersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
