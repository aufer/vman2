import { Module } from '@nestjs/common';

import { AppController }   from './app.controller';
import { AppService }      from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { MembersModule }   from './members/members.module';
import { TimeEntryModule } from './time-entry/time-entry.module';
import { MongooseModule }  from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/abimgmt'),
    EmployeesModule,
    MembersModule,
    TimeEntryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
