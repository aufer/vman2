import { ValidatorFn } from '@angular/forms';

export class FieldConfig<T> {
  name: keyof T;
  validators: ValidatorFn | ValidatorFn[] | null;
  defaultValue: any;
}

export type FormConfig<T> = FieldConfig<T>[];
