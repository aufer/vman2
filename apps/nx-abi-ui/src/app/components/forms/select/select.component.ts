import { ControlValueAccessor, NgControl }                      from '@angular/forms';
import { Component, forwardRef, Inject, Input, Optional, Self } from '@angular/core';

@Component({
  selector: 'abi-select',
  templateUrl: 'select.component.html'
})
export class SelectComponent<T> implements ControlValueAccessor {
  value: string;
  disabled: boolean;

  @Input()
  options: T[];

  @Input()
  displayProperty: keyof T;

  @Input()
  label: string;

  @Input()
  withoutLabel: boolean;

  constructor(
    @Self()
    @Optional()
    @Inject(forwardRef(() => NgControl))
    public ngControl: NgControl
  ) {
    ngControl.valueAccessor = this;
  }

  get errors() {
    if (!this.ngControl.errors) return [];
    return Object.keys(this.ngControl.errors);
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

  onTouched() {
  }

  valueChange(event) {
    this.onChange(JSON.parse(event.target.value));
  }

  stringify(val) {
    return JSON.stringify(val);
  }
}
