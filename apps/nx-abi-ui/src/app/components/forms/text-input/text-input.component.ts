import { Component, forwardRef, Inject, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl }                      from '@angular/forms';

@Component({
  selector: 'abi-text-input',
  templateUrl: 'text-input.component.html',
  styleUrls: ['text-input.component.scss'],
})
export class TextInputComponent implements ControlValueAccessor {
  value: string;

  @Input()
  name: string;

  @Input()
  type: 'text' | 'date' | 'number' | 'password' = 'text';

  @Input()
  withoutLabel: boolean;

  @Input()
  disabled: boolean;

  @Input()
  multiline: boolean;

  constructor(
    @Self()
    @Optional()
    @Inject(forwardRef(() => NgControl))
    private ngControl: NgControl,
  ) {
    ngControl.valueAccessor = this;
  }

  get errors() {
    if (!this.ngControl.errors) return [];
    return Object.keys(this.ngControl.errors);
  }

  valueChange(event) {
    const value = event.target.value;

    switch(this.type) {
      case 'number':
        this.onChange(+value);
        break;
      default:
        this.onChange(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  onChange(_: any) {
  }

  onTouched(_: any) {
  }
}
