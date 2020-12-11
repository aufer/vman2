import { Component }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient }     from '@angular/common/http';
import { IMember }        from '@nx-abi-mgmt/nx-abi-shared';

@Component({
  templateUrl: 'member-details.component.html'
})
export class MemberDetailsComponent {
  member: IMember;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const id = route.snapshot.paramMap.get('id');
    http.get('http://localhost:3333/api/members/' + id).toPromise().then((res: { data: IMember }) => {
      this.member = res.data;
    })
  }
}
