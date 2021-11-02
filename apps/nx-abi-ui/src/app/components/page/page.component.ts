import { Component, Input } from '@angular/core';

@Component({
  selector: 'abi-page',
  templateUrl: 'page.component.html'
})
export class PageComponent {

  @Input()
  pageTitle: string;
}
