import { Component }   from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'nx-abi-mgmt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nx-abi-ui';

  constructor(public userService: UserService) {
  }
}
