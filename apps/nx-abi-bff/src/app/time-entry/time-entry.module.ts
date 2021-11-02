import { Module }                     from '@nestjs/common';
import { MongooseModule }             from '@nestjs/mongoose';
import { TimeEntryController }        from './time-entry.controller';
import { TimeEntryService }           from './time-entry.service';
import { TimeEntry, TimeEntrySchema } from './time-entry.model';

@Module({
  imports: [MongooseModule.forFeature([{name: TimeEntry.name, schema: TimeEntrySchema}])],
  controllers: [TimeEntryController],
  providers: [
    TimeEntryService,
  ]
})
export class TimeEntryModule {
}
