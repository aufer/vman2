import { NgModule }             from '@angular/core';
import { TranslateModule }      from '@ngx-translate/core';
import { DataViewModule }       from './data-view/data-view.module';
import { AbiFormsModule }       from './forms/forms.module';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { PageModule }           from './page/page.module';
import { TableModule }          from './table/table.module';
import { HToIPipe }             from './time.pipe';
import { UserModule }           from './user/user.module';

const sharedModules = [
  AbiFormsModule,
  DataViewModule,
  LoadingSpinnerModule,
  PageModule,
  TableModule,
  UserModule,
  TranslateModule,
];

@NgModule({
  imports: sharedModules,
  exports: [
    sharedModules,
    HToIPipe
  ],
  declarations: [
    HToIPipe
  ],
  providers: [HToIPipe]
})
export class SharedComponentsModule {}
