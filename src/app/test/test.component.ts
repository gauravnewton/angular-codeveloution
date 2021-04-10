import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <div>
      Content goes here component level
    </div>

    <h2> Interpolated value {{name.toUpperCase()}}</h2>
    <h2> Site Base URl : {{baseUrl}} </h2>

    <input [disabled]="isDisabled" type="text" value="imple text"/>
    <input bind-disabled="!isDisabled" type="text" value="imple text"/>

    <p class="text-danger" [class]="textSuccess" > GIlli Gilli </p>
    <p class="text-success"> GIlli Gilli </p>
    <p [class.text-danger]="isError"> GIlli Gilli </p>
    
  `,
  styles: [`
    div {
      background:#000;
      color: #fff;
    }

    .text-success {
     color: green;
    }

    .text-danger {
      color:red;
    }
  `]
})
export class TestComponent implements OnInit {
bled = false;
  public isDisabled = true;
  public name = "pagal";
  public baseUrl = window.location.href;
  public textSuccess = "text-success";
  public textDanger = "text-danger";
  public isError = false;
  constructor() { }

  ngOnInit(): void {
  }

}
