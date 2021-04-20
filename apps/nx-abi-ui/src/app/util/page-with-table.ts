import { ActivatedRoute, Router } from '@angular/router';
import { TableConfig }            from './index';
import { BasePage }               from './base-page';
import { Store }                  from '@ngrx/store';
import { AppStoreModule }         from '../store';
import { selectorMap }            from '../store/selectors';
import { Observable }             from 'rxjs';

export type LoadState = 'loaded' | 'empty' | 'error' | 'pending';

export abstract class PageWithTable<T extends { id?: string }> extends BasePage {
  public data$;
  public loadState$;

  protected constructor(protected store: Store<AppStoreModule>, protected router: Router, protected route: ActivatedRoute) {
    super(router, route);
    this.initData();
  }

  protected initData() {
    this.data$ = this.store.select(selectorMap[this.name].all);
    this.loadState$ = this.store.select(selectorMap[this.name].loadState);
  }

  abstract get name(): string;

  abstract get tableConfig(): Observable<TableConfig<T>>;
}
