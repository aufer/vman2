import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent }  from './text-input.component';
import { TranslateModule }     from '@ngx-translate/core';

@NgModule({
  declarations: [TextInputComponent],
  exports: [TextInputComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TranslateModule,
    ]
})
export class TextInputModule {}
