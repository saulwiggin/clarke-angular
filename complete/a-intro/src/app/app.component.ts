import { Component } from '@angular/core';

@Component({
  selector: 'weather',
  template: `
    <section class='news'>Hurricane {{name}} arrives today</section>
  `,
  styles: [`.news{
      font-size:2.5rem;
      font-family:tahoma
  }`]
})

export class WeatherComponent {    
    name : string;
    constructor() {
        this.name = "Angular"
    }
}
