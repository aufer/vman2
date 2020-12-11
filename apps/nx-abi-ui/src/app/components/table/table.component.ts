import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModel }                                        from '../../util/table-model';

@Component({
  selector: 'abi-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T extends { id: string }> {
  _data: T[];

  @Output()
  elementSelected = new EventEmitter<T>();

  @Input()
  set data(data: T[]) {
    if (!data || data.length === 0) return;
    this._data = data;
    this.tableModel = new TableModel<T>(data);
  }

  tableModel: TableModel<T>;
}
