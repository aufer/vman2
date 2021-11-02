import { Module }                      from '@nestjs/common';
import { MongooseModule }              from '@nestjs/mongoose';
import { AppController }               from './app.controller';
import { AppService }                  from './app.service';
import { EmployeesModule }             from './employees/employees.module';
import { MembersModule }               from './members/members.module';
import { TimeEntryModule }             from './time-entry/time-entry.module';
import { UserModule }                  from './users/user.module';
import { AuthModule }                  from './auth/auth.module';
import { UnauthorizedExceptionFilter } from './util/auth-filter';
import { RegistrationModule }          from './registrations/registration.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/abimgmt'),
    EmployeesModule,
    MembersModule,
    TimeEntryModule,
    RegistrationModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, UnauthorizedExceptionFilter],
})
export class AppModule {
}
