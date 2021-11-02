import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FormsModule }     from '@angular/forms';
import { SelectComponent } from './select.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
  ]
})
export class SelectModule {}
