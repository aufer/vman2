import { Component, OnInit }     from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute }        from '@angular/router';
import { IMember }                   from '@nx-abi-mgmt/nx-abi-shared';
import { FormComponent, FormConfig } from '../../util';

@Component({
  templateUrl: 'member-form.component.html'
})
export class MemberFormComponent extends FormComponent<IMember> implements OnInit {

  constructor(protected route: ActivatedRoute) {
    super(route);
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
      this.entity.birthDate = <any>this.formatDate(this.entity?.birthDate);
      this.entity.joined = <any>this.formatDate(this.entity?.joined);
      form.patchValue(this.entity);
    }

    return form;
  }

  private formatDate(date) {
    if (!date) return;
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
