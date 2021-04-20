import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { HttpClientModule }       from '@angular/common/http';
import { RouterModule, Routes }   from '@angular/router';
import { SettingsComponent }      from './settings.component';
import { SharedComponentsModule } from '../../components/shared-components.module';

const routes: Routes = [{path: '', component: SettingsComponent}];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ]
})
export class SettingsModule {
}
