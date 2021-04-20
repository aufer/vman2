import { Component, OnInit }                    from '@angular/core';
import { FormGroup, Validators }                from '@angular/forms';
import { ActivatedRoute }                       from '@angular/router';
import { Store }                                from '@ngrx/store';
import { IMember }                              from '@nx-abi-mgmt/nx-abi-shared';
import { StoreModel }                           from '../../store';
import { DateUtils, FormComponent, FormConfig } from '../../util';

@Component({
  templateUrl: 'member-form.component.html'
})
export class MemberFormComponent extends FormComponent<IMember> implements OnInit {

  constructor(protected route: ActivatedRoute, protected store: Store<StoreModel>) {
    super(route, store);
  }

  get name() {
    return 'members';
  }

  get formConfig(): FormConfig<IMember> {
    return [
      {name: 'firstName', validators: Validators.required, defaultValue: ''},
      {name: 'lastName', validators: Validators.required, defaultValue: ''},
      {name: 'birthDate', validators: null, defaultValue: ''},
      {name: 'street', validators: Validators.required, defaultValue: ''},
      {name: 'streetNo', validators: Validators.required, defaultValue: ''},
      {name: 'addition', validators: null, defaultValue: ''},
      {name: 'location', validators: Validators.required, defaultValue: ''},
      {name: 'postCode', validators: Validators.required, defaultValue: ''},
      {name: 'phone', validators: Validators.required, defaultValue: ''},
      {name: 'mobile', validators: null, defaultValue: ''},
      {name: 'email', validators: Validators.required, defaultValue: ''},
      {name: 'premium', validators: Validators.required, defaultValue: ''},
      {name: 'iban', validators: Validators.required, defaultValue: ''},
      {name: 'bic', validators: Validators.required, defaultValue: ''},
      {name: 'sepaRef', validators: null, defaultValue: ''},
      {name: 'state', validators: Validators.required, defaultValue: ''},
      {name: 'joined', validators: Validators.required, defaultValue: ''},
      {name: 'terminated', validators: null, defaultValue: ''},
    ];
  }

  protected buildForm(): FormGroup {
    const form = super.buildForm();

    if (this.entity) {
      this.entity = {
        ...this.entity,
        birthDate: <any>DateUtils.toIsoDateString(this.entity?.birthDate),
        joined: <any>DateUtils.toIsoDateString(this.entity?.joined),
      } as IMember;
      form.patchValue(this.entity);
    }

    return form;
  }
}
