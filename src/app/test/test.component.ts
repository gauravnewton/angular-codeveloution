import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <div>
      Content goes here component level
    </div>

    <h2> Interpolated value {{name.toUpperCase()}}</h2>
    <h2> Site Base URl : {{baseUrl}} </h2>
  `,
  styles: [`
    div {
      background:#000;
      color: #fff;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "pagal";
  public baseUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

}
