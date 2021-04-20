import { Model }       from 'mongoose';
import { Injectable }  from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from '../base/base.service';
import { User }        from './user.model';

@Injectable()
export class UserService extends BaseService<User> {

  constructor(@InjectModel(User.name) protected userModel: Model<User>) {
    super(userModel);
  }

  findOneByThirdPartyId(thirdPartyId: string, provider: string): Promise<User> {
    return this.userModel.findOne({thirdPartyId, provider}).exec();
  }
}
