import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators }                                      from '@angular/forms';

@Component({
  selector: 'abi-time-input',
  templateUrl: 'time-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeInputComponent implements OnInit {

  @Input()
  hours: number;

  formGroup: FormGroup;

  @Output()
  update = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    const time = this.hToI(this.hours);

    this.formGroup = this.fb.group({
      start: [time[0], Validators.pattern(/^[0-1]?[0-9]?$|^2[0-3]?$/)],
      end: [time[1], Validators.pattern(/^[0-5]?[0-9]$/)],
    }, {updateOn: 'blur'});

    this.formGroup.valueChanges.subscribe(c => {
      if (!this.formGroup.valid) return;

      this.update.next(this.iToH(+c.start, +c.end));
    })
  }

  private hToI(hours: number): [number, number] {
    return [Math.floor(hours), 60 * (hours - Math.floor(hours))];
  }

  private iToH(h: number, m: number): number {
    return h + m / 60;
  }
}
