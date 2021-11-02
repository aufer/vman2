import { Module }               from '@nestjs/common';
import { MongooseModule }       from '@nestjs/mongoose';
import { MembersController }    from './members.controller';
import { Member, MemberSchema } from './members.model';
import { MembersService }       from './members.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Member.name, schema: MemberSchema}]),
  ],
  controllers: [MembersController],
  providers: [
    MembersService,
  ]
})
export class MembersModule {
}
