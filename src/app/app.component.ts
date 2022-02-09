import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues';

  collegue: Collegue = {
    pseudo: "Pikachu",
    score: 100,
    photoUrl: "https://static.fnac-static.com/multimedia/Images/C7/C7/0B/BB/12258247-1505-1540-1/tsp20190710160121/Detective-Pikachu-en-peluche-animaux-Jouet-y406.jpg#7e4b1bb0-8a9b-476e-977e-9e47333b70cd",
    avis: 0
  };

}
