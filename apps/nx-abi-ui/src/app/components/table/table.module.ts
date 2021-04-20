import { CommonModule }         from '@angular/common';
import { NgModule }             from '@angular/core';
import { TranslateModule }      from '@ngx-translate/core';
import { TableComponent }       from './table.component';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';
import { RouterModule }         from '@angular/router';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [CommonModule, TranslateModule, LoadingSpinnerModule, RouterModule]
})
export class TableModule {
}
