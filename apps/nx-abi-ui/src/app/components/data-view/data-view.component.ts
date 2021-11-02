import { Component, Input } from '@angular/core';

@Component({
  selector: 'abi-data-view',
  templateUrl: 'data-view.component.html',
})
export class DataViewComponent {
  @Input()
  label: string;
}
