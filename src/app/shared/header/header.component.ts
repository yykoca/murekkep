import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  body!: HTMLElement;

  ngOnInit() {
    this.body = document.getElementsByTagName('body')[0];
  }

  onToggle() {
    this.isOpen = !this.isOpen;
    this.body.classList.toggle('overflow-hidden');
  }
}
