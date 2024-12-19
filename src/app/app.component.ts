import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DogComponent} from "./dogs";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, DogComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store-signal-poc';
}