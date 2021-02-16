import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient }             from '@angular/common/http';
import { Injectable }             from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppInjector }            from './app.injector';
import { FormConfig }             from './form-model';

const apiBase = 'http://localhost:3333/api';

@Injectable()
export abstract class FormComponent<T> {
  mode: 'create' | 'update';
  id: string;
  entity: T;

  formGroup: FormGroup;

  protected router: Router;
  protected http: HttpClient;
  protected fb: FormBuilder;

  protected constructor(protected route: ActivatedRoute) {
    this.injectMembers();
    this.initComponent().then(() => {
      this.formGroup = this.buildForm();
    });
  }

  ngOnInit() {
    this.formGroup = this.buildForm();
  }

  save() {
    if (this.formGroup.valid) {
      return this.saveEntity().then(() => this.router.navigate(['/' + this.name]));
    }

    Object.keys(this.formGroup.controls).forEach(field => {
      const control = this.formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }

  abort() {
    const abort = this.formGroup.touched ? confirm('Abbrechen und Änderungen verwerfen?') : true;
    if (abort) this.router.navigate(['/' + this.name]);
  }

  get fields(): (keyof T)[] {
    if (this.formConfig) return [];
    return this.formConfig.map(conf => conf.name);
  }

  abstract get formConfig(): FormConfig<T>;

  abstract get name();

  protected buildForm(): FormGroup {
    return this.fb.group(this.formConfig.reduce((state, field) => ({
      ...state,
      [field.name]: [field.defaultValue, field.validators]
    }), {}));
  }

  protected async getEntity() {
    return this.request('get', this.id).then((res: { data: T }) => {
      this.entity = res.data;
    })
  }

  protected async saveEntity() {
    const formValue = this.transformValue(this.formGroup.value);
    const body = {_id: this.id, ...formValue};

    if (this.mode === 'create') {
      return this.request('post', undefined, body).then(res => {
        console.log('created new element', res);
      });
    } else {
      return this.request('put', this.id, body).then(res => {
        console.log('updated element', res);
      });
    }
  }

  protected transformValue(value: T) {
    return value;
  }

  private request(method: 'get' | 'post' | 'put', param: string, body: T = undefined) {
    const url = param ? `${this.url}/${param}` : this.url;
    return this.http[method](url, <any>body).toPromise();
  }

  private injectMembers() {
    const injector = AppInjector.getInjector();
    this.router = injector.get(Router);
    this.http = injector.get(HttpClient);
    this.fb = injector.get(FormBuilder);
  }

  private async initComponent() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.mode = 'create';
      return;
    }

    this.mode = 'update';
    await this.getEntity();
  }

  private get url() {
    return `${apiBase}/${this.name}`;
  }
}
