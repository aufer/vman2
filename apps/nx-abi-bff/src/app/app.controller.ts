import * as path                                            from 'path';
import { Controller, Get, Req, Res, UseFilters, UseGuards } from '@nestjs/common';
import { UnauthorizedExceptionFilter }                      from './util/auth-filter';
import { AuthGuard }                                        from '@nestjs/passport';
import { JWT_COOKIE_NAME }                                  from './constants';

interface RootParams {
  req: any;
  res: any;
}

const APP_ROUTE_PREFIX = 'app';
const ANGULAR_ROOT_PATH = path.resolve(__dirname, '../../../dist/apps/nx-abi-ui/');
const allowedExt = ['.js', '.ico', '.css', '.png', '.jpg', '.woff2', '.woff', '.ttf', '.svg', '.map', '.json', '.pdf'];

const resolvePath = (file: string) => path.join(ANGULAR_ROOT_PATH, file);

@Controller()
@UseGuards(AuthGuard('jwt'))
@UseFilters(UnauthorizedExceptionFilter)
export class AppController {
  @Get()
  root(@Req() req, @Res() res): void {
    res.redirect(`/${APP_ROUTE_PREFIX}`);
  }

  @Get(`${APP_ROUTE_PREFIX}/logout`)
  async logout(@Req() req, @Res() res) {
    await req.logout();
    res.clearCookie(JWT_COOKIE_NAME);
    res.redirect(`/${APP_ROUTE_PREFIX}`);
  }

  @Get(`${APP_ROUTE_PREFIX}**`)
  angular(@Req() req, @Res() res): void {
    let { originalUrl } = req;
    originalUrl = originalUrl.replace(APP_ROUTE_PREFIX, '');
    if (allowedExt.filter((ext) => originalUrl.indexOf(ext) > 0).length > 0) {
      // it has a file extension --> resolve the file
      res.sendFile(resolvePath(originalUrl));
    } else {
      // in all other cases, redirect to the index.html!
      res.sendFile(resolvePath('index.html'));
    }
  }
}
