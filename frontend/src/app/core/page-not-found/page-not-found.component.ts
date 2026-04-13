import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 5000);
  }
}
