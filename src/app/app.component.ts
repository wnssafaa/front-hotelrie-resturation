import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppModule} from "./app.module";
import {ResturationModule} from "./resturation/resturation.module";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'graphqlprojet';

}
