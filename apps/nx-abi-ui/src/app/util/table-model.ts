import { DatePipe } from '@angular/common';

export type SortOrder = 'asc' | 'desc';

const hiddenColumns = ['_id', '__v'];

export class TableModel<T extends {id: string}> {
  config: {
    columns: any[]
    orderBy: keyof T,
    orders: { [key: string]: SortOrder }
  };
  private _data: T[];

  constructor(data: T[]) {
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
    return this.config.columns.filter(s => !hiddenColumns.includes(s));
  }

  render(column: string, item: T) {
    const value = item[column];
    if (column.toLocaleLowerCase().includes('date')) {
      return new DatePipe('en_US').transform(value, 'dd.MM.yyyy');
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
    })
  }
}
