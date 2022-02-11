import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  @Input() listeCollegues?: Collegue[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  actualiser() {
    this.dataService.rafraichirListeCollegues();
  }

}
