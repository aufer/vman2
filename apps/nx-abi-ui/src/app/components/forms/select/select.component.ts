import { ControlValueAccessor, NgControl }                              from '@angular/forms';
import { Component, forwardRef, Inject, Input, OnInit, Optional, Self } from '@angular/core';

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

  constructor(
    @Self()
    @Optional()
    @Inject(forwardRef(() => NgControl))
    private ngControl: NgControl
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

  onTouched(_: any) {
  }
}
