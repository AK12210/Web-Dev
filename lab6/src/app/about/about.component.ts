import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>About</h1><p>I created this to view my album</p>`,
  styles: [`h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }`]
})
export class AboutComponent {}
