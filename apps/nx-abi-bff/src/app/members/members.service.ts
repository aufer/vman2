import { Model }       from 'mongoose';
import { Injectable }  from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from '../base/base.service';
import { Member }      from './members.model';

@Injectable()
export class MembersService extends BaseService<Member> {

  constructor(@InjectModel(Member.name) protected memberModel: Model<Member>) {
    super(memberModel);
  }
}
