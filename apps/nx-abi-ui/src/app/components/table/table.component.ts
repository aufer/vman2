import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnConfig, TableConfig, TableModel }                           from '../../util/table-model';
import { LoadState }                                                       from '../../util';

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

  @Output()
  editElement = new EventEmitter<T>();

  @Input()
  set data(data: T[]) {
    if (!data || data.length === 0) return;
    this._data = data;
    this.tableModel = new TableModel<T>(data, this.tableConfig);
  }

  @Input()
  tableConfig: TableConfig<T>;

  @Input()
  state: LoadState;

  tableModel: TableModel<T>;
}
