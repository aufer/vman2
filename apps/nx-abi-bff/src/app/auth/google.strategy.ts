import { Injectable }            from '@nestjs/common';
import { PassportStrategy }      from '@nestjs/passport';
import { Strategy }              from 'passport-google-oauth20';
import { AuthService, Provider } from './auth.service';
import { User }                  from '../users/user.model';
import { environment }           from '../../environments/environment';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super(environment.googleAuth);
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (err: any, result: any) => void
  ) {
    try {
      const p: Partial<User> = {
        givenName: profile.name.givenName,
        familyName: profile.name.familyName,
        email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : undefined,
        picture: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : undefined,
        thirdPartyId: profile.id,
        provider: Provider.GOOGLE,
        role: undefined,
      };
      const jwt: string = await this.authService.validateOAuthLogin(p as User);
      const user = {
        jwt,
      };

      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }

  // workaround to pass options to superclass auth call
  authorizationParams(options: any): any {
    return Object.assign(options, {
      prompt: 'select_account',
    });
  }
}
