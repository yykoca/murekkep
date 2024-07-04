import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public contentLoaded = false;

  constructor(private router: Router) {}

  ngOnInit() {
    initFlowbite();
    const header = document.getElementsByTagName('header')[0];
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/') {
          header.classList.add('not-landing-page');
        } else {
          header.classList.remove('not-landing-page');
        }
      }
      window.scrollTo(0, 0);
    });

    window.addEventListener('scroll', function () {
      navbarScroll();
    });
    const navbarScroll = () => {
      const y = window.scrollY;
      if (y > 100) {
        this.contentLoaded = true;
        header.classList.add('small');
      } else if (y < 100) {
        this.contentLoaded = false;
        header.classList.remove('small');
      }
    };
  }
}
