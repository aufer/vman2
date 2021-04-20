import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators }                                      from '@angular/forms';
import { DateUtils }                                                               from '../../../util';

@Component({
  selector: 'abi-time-input',
  templateUrl: 'time-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeInputComponent implements OnInit {

  private _hours: number

  @Input()
  set hours(value: number) {
    this._hours = value ? value : 0;

    if (!this.formGroup) return;
    const time = DateUtils.hToI(this._hours);
    this.formGroup.patchValue({start: time[0], end: time[1]});
  }

  @Input()
  readonly: boolean;

  formGroup: FormGroup;

  @Output()
  update = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const time = DateUtils.hToI(this._hours);

    this.formGroup = this.fb.group({
      start: [time[0], Validators.pattern(/^[0-1]?[0-9]?$|^2[0-3]?$/)],
      end: [time[1], Validators.pattern(/^[0-5]?[0-9]$/)],
    }, {updateOn: 'blur'});

    this.formGroup.valueChanges.subscribe(c => {
      if (!this.formGroup.valid) return;

      this.update.next(DateUtils.iToH(+c.start, +c.end));
    });

    if (this.readonly)
        Object.values(this.formGroup.controls).forEach(c => c.disable());
  }
}
