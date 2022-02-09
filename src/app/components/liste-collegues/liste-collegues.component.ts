import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  listeCollegues: Collegue[] = [
    {
      pseudo: "Pikachu",
      score: 100,
      photoUrl: "https://static.fnac-static.com/multimedia/Images/C7/C7/0B/BB/12258247-1505-1540-1/tsp20190710160121/Detective-Pikachu-en-peluche-animaux-Jouet-y406.jpg#7e4b1bb0-8a9b-476e-977e-9e47333b70cd",
      avis: 0
    },
    {
      pseudo: "Yoshi",
      score: 500,
      photoUrl: "https://www.kamehashop.fr/30687-large_default/peluche-yoshi-vert.jpg",
      avis: 0
    },
    {
      pseudo: "Totoro",
      score: 300,
      photoUrl: "https://www.kamehashop.fr/31865-large_default/peluche-totoro-gris-nakayoshi.jpg",
      avis: 0
    },
    {
      pseudo: "Snoopy",
      score: 50,
      photoUrl: "https://m.media-amazon.com/images/I/61uvN5etseL._AC_SS450_.jpg",
      avis: 0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
