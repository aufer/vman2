import { Component, HostListener, Input } from '@angular/core';
import { IUser, UserRole }                from '@nx-abi-mgmt/nx-abi-shared';

@Component({
  selector: 'abi-user-badge',
  templateUrl: 'user-badge.component.html',
})
export class UserBadgeComponent {
  UserRole = UserRole;

  @Input()
  user: IUser;

  toggle: boolean;

  @HostListener('document:click', ['$event'])
  clickout() {
    this.toggle = false;
  }

  toggleProfile(event) {
    event.stopPropagation();
    this.toggle = !this.toggle;
  }

  get initials() {
    if (!this.user) return '';
    return this.user.givenName[0] + this.user.familyName[0];
  }
}
