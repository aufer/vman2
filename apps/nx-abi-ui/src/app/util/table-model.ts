import { DatePipe } from '@angular/common';

export type SortOrder = 'asc' | 'desc';

export interface TableConfig<T> {
  hiddenColumns?: (keyof T)[];
  columnConfigs?: ColumnConfig<T>[];
}

export interface ColumnConfig<T> {
  name: keyof T;
  isDate?: boolean;
  isLink?: boolean;
  linkPrefix?: string;
}

export class TableModel<T extends {id: string}> {
  private hiddenColumns: (keyof T | string)[] = ['_id', '__v'];

  config: {
    columns: any[]
    orderBy: keyof T,
    orders: { [key: string]: SortOrder }
  };
  private _data: T[];

  constructor(data: T[], public tableConfig: TableConfig<T> = {}) {
    console.log('CTOR:MODEL', data);
    if (tableConfig.hiddenColumns) this.hiddenColumns.push(...tableConfig.hiddenColumns);

    const fields = data.map(rec => Object.keys(rec)).sort((a, b) => b.length - a.length)[0];
    this.config = {
      columns: fields,
      orderBy: 'id',
      orders: fields.reduce((s, v) => ({...s, [v]: 'asc'}), {}),
    };
    this._data = data
  }

  get data() {
    return this._data;
  }

  get columns() {
    return this.config.columns.filter(s => !this.hiddenColumns.includes(s));
  }

  render(column: keyof T, item: T) {
    const value = item[column];
    const columnConfig = this.getColumnConfigFor(column);

    if (!columnConfig) return value;

    if (columnConfig.isDate) {
      return new DatePipe('en_US').transform(value, 'dd.MM.yyyy');
    }

    if (columnConfig.isLink && columnConfig.linkPrefix) {
      return columnConfig.linkPrefix + ':' + value;
    }

    return value;
  }

  getOrder(column: string) {
    return this.config.orders[column];
  }

  orderBy(column: string) {
    const currentOrder = this.config.orders[column];
    this.config.orders[column] = this.config.orderBy !== column || currentOrder === 'desc' ? 'asc' : 'desc'
    this.config.orderBy = <any>column;

    this._data = this.data.sort((a, b) => {
      const aVal = a[column];
      const bVal = b[column];
      if (!aVal) return -1;
      if (!bVal) return 1;
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        if (this.config.orders[column] === 'asc') return ('' + aVal).localeCompare(bVal);
        return ('' + bVal).localeCompare(aVal);
      }
    });
  }

  private getColumnConfigFor(column: keyof T) {
    return this.tableConfig.columnConfigs ? this.tableConfig.columnConfigs.find(s => s.name === column) : undefined;
  }

  isLink(colName) {
    if (!this.tableConfig) return false;
    if (!this.tableConfig.columnConfigs) return false;
    return this.tableConfig.columnConfigs.findIndex(s => s.name === colName && s.isLink) >= 0;
  }

  isDate(colName) {
    if (!this.tableConfig) return false;
    if (!this.tableConfig.columnConfigs) return false;
    console.log('is', colName, 'date?', this.tableConfig.columnConfigs.findIndex(s => s.name === colName && s.isDate) >= 0);
    return this.tableConfig.columnConfigs.findIndex(s => s.name === colName && s.isDate) >= 0;
  }
}
