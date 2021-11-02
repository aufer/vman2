import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { DataViewComponent } from './data-view.component';

@NgModule({
  declarations: [DataViewComponent],
  exports: [DataViewComponent],
  imports: [CommonModule],
})
export class DataViewModule {}
