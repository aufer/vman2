import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PageComponent }   from './page.component';

@NgModule({
  declarations: [PageComponent],
  exports: [PageComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
})
export class PageModule {}
