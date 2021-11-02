import { HttpClient }        from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export type DataType = 'users' | 'members' | 'employees';

@Component({
  selector: 'nx-abi-mgmt-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  data: any = {};
  selectedType: DataType

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  load(type: DataType) {
    this.selectedType = type;
    this.http.get('//localhost:3333/api/' + type).toPromise().then(d => this.data = d);
  }
}
