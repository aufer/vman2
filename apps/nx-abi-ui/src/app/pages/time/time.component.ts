import { Component, OnInit }                  from '@angular/core';
import { HttpClient }                         from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee }                          from '@nx-abi-mgmt/nx-abi-shared';

@Component({
  templateUrl: 'time.component.html'
})
export class TimeComponent implements OnInit {
  employees: IEmployee[];
  formGroup: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.http.get('//localhost:3333/api/employees').toPromise()
      .then((res: { data: IEmployee[] }) => {
        this.employees = res.data;
      })
      .catch(error => {
        console.error(error);
      });

    this.formGroup = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      employeeSelection: ['', Validators.required]
    })
  }
}
