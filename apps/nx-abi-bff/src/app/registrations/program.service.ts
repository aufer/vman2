import { Injectable }  from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Program }     from './program.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model }       from 'mongoose';

@Injectable()
export class ProgramService extends BaseService<Program> {

  constructor(@InjectModel(Program.name) protected programModel: Model<Program>) {
    super(programModel);
  }
}
