import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { HttpClientModule }       from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { AbiFormsModule }         from '../../components';
import { ServicesModule }         from '../../services';
import { TimeComponent }          from './time.component';
import { TimeRoutingModule }      from './time.routing';
import { TimeInputComponent }     from './time-input/time-input.component';
import { WeeklySheetComponent }   from './weekly-sheet/weekly-sheet.component';
import { TranslateModule }        from '@ngx-translate/core';
import { SharedComponentsModule } from '../../components/shared-components.module';

@NgModule({
  declarations: [TimeComponent, TimeInputComponent, WeeklySheetComponent],
  imports: [
    CommonModule,
    TimeRoutingModule,
    HttpClientModule,
    AbiFormsModule,
    ReactiveFormsModule,
    ServicesModule,
    TranslateModule,
    SharedComponentsModule,
  ]
})
export class TimeModule {}
