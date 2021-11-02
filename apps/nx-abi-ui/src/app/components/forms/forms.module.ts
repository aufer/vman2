import { NgModule }        from '@angular/core';
import { TextInputModule } from './text-input/text-input.module';
import { SelectModule }    from './select/select.module';

@NgModule({
  imports: [SelectModule, TextInputModule],
  exports: [SelectModule, TextInputModule],
})
export class AbiFormsModule {}
