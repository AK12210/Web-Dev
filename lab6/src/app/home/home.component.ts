import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Home page of my album</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam vitae maximus dui. Cras sit amet fringilla ex. Suspendisse accumsan leo
    eu felis feugiat suscipit. Duis ante lectus, lacinia ut lacinia sed, ultricies luctus mi.
    Vivamus quis sagittis diam, in sollicitudin metus. Etiam at arcu ex. Sed sed felis et nisl
    congue sodales. Nullam mollis diam enim, ut gravida turpis sagittis in. Aliquam ornare nisl
    non orci fermentum feugiat. Vivamus fermentum mauris eget sodales vestibulum. Pellentesque ac congue risus. </p>`,
  styles: [`h1 { text-align: center;}`]
})
export class HomeComponent {}
