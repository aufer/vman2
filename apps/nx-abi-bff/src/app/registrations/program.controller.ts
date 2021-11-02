import { Controller }     from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { Program }        from './program.model';
import { ProgramService } from './program.service';

@Controller({
  path: 'api/programs'
})
export class ProgramController extends BaseController<Program>{

  constructor(protected programService: ProgramService) {
    super(programService);
  }
}
