import { Component }                    from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { HttpClient }                   from '@angular/common/http';
import { Store }                        from '@ngrx/store';
import { IMember }                      from '@nx-abi-mgmt/nx-abi-shared';
import { StoreModel, MembersSelectors } from '../../store';

@Component({
  templateUrl: 'member-details.component.html'
})
export class MemberDetailsComponent {
  member: IMember;

  constructor(private route: ActivatedRoute, private http: HttpClient, private store: Store<StoreModel>) {
    const id = route.snapshot.paramMap.get('id');
    store.select(MembersSelectors.selectMemberById(id)).subscribe(m => this.member = m);
  }
}
