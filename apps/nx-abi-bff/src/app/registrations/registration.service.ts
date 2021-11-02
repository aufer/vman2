import { BaseService }  from '../base/base.service';
import { Registration } from './registration.model';
import { Injectable }   from '@nestjs/common';
import { InjectModel }  from '@nestjs/mongoose';
import { Model }        from 'mongoose';

@Injectable()
export class RegistrationService extends BaseService<Registration> {

  constructor(@InjectModel(Registration.name) protected registrationModel: Model<Registration>) {
    super(registrationModel);
  }
}
