import { HttpClient }      from '@angular/common/http';
import { Router }          from '@angular/router';
import { TableConfig }     from './index';
import { BehaviorSubject } from 'rxjs';

export type LoadState = 'loaded' | 'empty' | 'error' | 'pending';

export abstract class PageWithTable<T extends { _id?: string }> {
  public data: T[];
  public listState$ = new BehaviorSubject<LoadState>('empty');
  private stateObservable = this.listState$.asObservable();

  protected constructor(protected http: HttpClient, protected router: Router) {
    this.loadData();
  }

  abstract get name();

  abstract get tableConfig(): TableConfig<T>;

  protected loadData() {
    this.listState$.next('pending');
    this.http.get('//localhost:3333/api/' + this.name).toPromise()
      .then((res: { data: T[] }) => {
        this.data = res.data;
        this.listState$.next('loaded');
      })
      .catch(error => {
        this.listState$.next('error')
      });
  }

  get loadState() {
    return this.stateObservable;
  }

  showDetails(instance: T) {
    this.router.navigate([this.name, instance._id]);
  }

  edit(instance: T) {
    this.router.navigate([this.name, 'edit', instance._id]);
  }
}
