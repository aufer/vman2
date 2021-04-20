import { Controller, Get, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard }                                                   from '@nestjs/passport';
import { JWT_COOKIE_NAME }                                             from '../constants';
import { ActionLog }                                                   from '../util/action-log.decorator';

@Controller('api/auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  @ActionLog()
  googleLogin() {
    // initiates the Google OAuth2 login flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  @ActionLog()
  googleLoginCallback(@Req() req, @Res() res) {
    // handles the Google OAuth2 callback
    const jwt: string = req.user.jwt;
    if (jwt) {
      res.cookie(JWT_COOKIE_NAME, jwt);
      res.redirect(`/app`);
    } else {
      throw new UnauthorizedException('You are not authorized');
    }
  }
}
