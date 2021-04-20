import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy }                  from '@nestjs/passport';
import { ExtractJwt, Strategy }              from 'passport-jwt';
import { JWT_COOKIE_NAME, JWT_SECRET }       from '../constants';
import { ActionLog }                         from '../util/action-log.decorator';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        (req) => {
          let token = null;
          if (req && req.cookies) {
            token = req.cookies[JWT_COOKIE_NAME];
          }
          return token;
        },
      ]),
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload, done: (err: any, result: any) => void) {
    try {
      // You could add a function to the authService to verify the claims of the token:
      // i.e. does the user still have the roles that are claimed by the token
      // const validClaims = await this.authService.verifyTokenClaims(payload);

      // if (!validClaims)
      //    return done(new UnauthorizedException('invalid token claims'), false);
      done(null, payload);
    } catch (err) {
      throw new UnauthorizedException('You are not authorized', err.message);
    }
  }
}
