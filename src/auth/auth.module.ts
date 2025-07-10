import { Module } from '@nestjs/common';
import { AuthService } from './service/auth/auth.service';
import { AuthController } from './controller/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[JwtModule.register({
    secret: 'JWT_SECRETO',
    signOptions:{expiresIn: '1h'}
  }),UserModule],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
