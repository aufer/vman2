import { Body, Controller, Post } from '@nestjs/common';
import { BaseController }         from '../base/base.controller';
import { MembersService } from './members.service';
import { MemberDoc }      from './members.model';

@Controller({
  path: 'members'
})
export class MembersController extends BaseController<MemberDoc>{

  constructor(protected service: MembersService) {
    super(service);
  }

  @Post()
  addMultiple(@Body() body: MemberDoc[]) {
    if (body.length < 1) {
      return undefined;
    }

    body.forEach(member => {
      this.service.create(member);
    })
  }
}
