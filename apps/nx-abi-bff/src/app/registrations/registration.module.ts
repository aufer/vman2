import { Module }                           from '@nestjs/common';
import { MongooseModule }                   from '@nestjs/mongoose';
import { Registration, RegistrationSchema } from './registration.model';
import { Program, ProgramSchema }           from './program.model';
import { RegistrationService }              from './registration.service';
import { ProgramService }                   from './program.service';
import { RegistrationController }           from './registration.controller';
import { ProgramController }                from './program.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Registration.name, schema: RegistrationSchema},
      {name: Program.name, schema: ProgramSchema}
    ]),
  ],
  controllers: [RegistrationController, ProgramController],
  providers: [
    RegistrationService,
    ProgramService,
  ]
})
export class RegistrationModule {}
