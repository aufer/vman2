import { Module }          from '@nestjs/common';
import { EmployeesModule } from '../employees/employees.module';
import { UserModule }      from '../users/user.module';
import { AuthController }  from './auth.controller';
import { AuthService }     from './auth.service';
import { GoogleStrategy }  from './google.strategy';
import { JwtStrategy }     from './jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [UserModule, EmployeesModule],
  providers: [AuthService, GoogleStrategy, JwtStrategy],
})
export class AuthModule {
}
