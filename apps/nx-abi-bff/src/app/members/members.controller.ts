import { Body, Controller, Post } from '@nestjs/common';
import { BaseController }         from '../base/base.controller';
import { MembersService }         from './members.service';
import { Member }                 from './members.model';

@Controller({
  path: 'api/members'
})
export class MembersController extends BaseController<Member> {

  constructor(protected service: MembersService) {
    super(service);
  }

  @Post()
  addMultiple(@Body() body: Member[]) {
    if (body.length < 1) {
      return undefined;
    }

    body.forEach(member => {
      this.service.create(member);
    })
  }
}
