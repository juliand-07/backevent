import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { environments } from './enviroments';
import { DatabaseModule } from './database/database.module';
import { EventModule } from './event/event.module';
import { AttendeeModule } from './attendee/attendee.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV || '.env'],
      isGlobal: true,
      load:[config],
      validationSchema: Joi.object({
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_PORT: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    EventModule,
    AttendeeModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
