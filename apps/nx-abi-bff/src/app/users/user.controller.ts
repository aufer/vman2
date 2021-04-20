import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard }                       from '@nestjs/passport';
import { BaseController }                  from '../base/base.controller';
import { User }                            from './user.model';
import { UserService }                     from './user.service';

@Controller({
  path: 'api/users'
})
@UseGuards(AuthGuard('jwt'))
export class UserController extends BaseController<User> {

  constructor(protected userService: UserService) {
    super(userService);
  }

  @Get('me')
  findMe(@Req() req): Promise<User> {
    return this.userService.getById(req.user.id);
  }
}
