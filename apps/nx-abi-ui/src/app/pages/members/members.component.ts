import { Component }  from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMember }    from '@nx-abi-mgmt/nx-abi-shared';
import { Router }     from '@angular/router';

@Component({
  templateUrl: 'members.component.html',
})
export class MembersComponent {
  members: IMember[];

  constructor(private http: HttpClient, private router: Router) {
    http.get('//localhost:3333/api/members').toPromise().then((res: { data: IMember[] }) => {
      this.members = res.data;
    });
  }

  showDetails(member: IMember) {
    console.log(member);
    this.router.navigate(['members', member._id]);
  }
}
