import { Observable }             from 'rxjs';
import { map }                    from 'rxjs/operators';
import { IUser }                  from '@nx-abi-mgmt/nx-abi-shared';
import { ActivatedRoute, Router } from '@angular/router';

export abstract class BasePage {
  private currentUser$: Observable<IUser> = this.route.data.pipe(map(d => d.user));

  protected constructor(protected router: Router, protected route: ActivatedRoute) {
  }

  get user() {
    return this.currentUser$;
  }
}
