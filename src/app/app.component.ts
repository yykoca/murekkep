import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    window.addEventListener('scroll', function () {
      navbarScroll();
    });
    function navbarScroll() {
      const y = window.scrollY;
      if (y > 100) {
        const header = document.getElementsByClassName('header')[0];
        header.classList.add('small');
      } else if (y < 100) {
        const header = document.getElementsByClassName('header')[0];
        header.classList.remove('small');
      }
    }
  }
}
