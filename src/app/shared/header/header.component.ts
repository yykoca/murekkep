import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  body!: HTMLElement;

  ngOnInit() {
    this.body = document.getElementsByTagName('body')[0];
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    this.body.classList.toggle('overflow-hidden');
  }

  hideMenu() {
    if (this.isCollapsed) {
      this.isCollapsed = false;
    }
    this.body.classList.remove('overflow-hidden');
  }
}
