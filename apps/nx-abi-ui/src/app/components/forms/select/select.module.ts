import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent }     from './select.component';

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SelectModule {}
