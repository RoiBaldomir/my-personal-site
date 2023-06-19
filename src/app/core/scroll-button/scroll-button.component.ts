import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.css']
})
export class ScrollButtonComponent implements OnInit {
  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.scrollY!== 0;
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
