import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { UserBadgeComponent } from './user-badge.component';
import { RouterModule }       from '@angular/router';

const components = [UserBadgeComponent];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
  declarations: components,
  exports: components,
})
export class UserModule {
}
