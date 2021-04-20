import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoadState, TableConfig, TableModel }                                  from '../../util';

@Component({
  selector: 'abi-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T extends { id: string }> implements OnChanges {
  _data: T[];

  @Input()
  entity: string;

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

  @Input()
  skipLinks: boolean;

  tableModel: TableModel<T>;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.tableConfig) return;
    this.data = this._data;
  }
}
