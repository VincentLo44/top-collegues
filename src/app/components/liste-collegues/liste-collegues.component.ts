import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  listeCollegues!: Observable<Collegue[]>;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.listeCollegues = this.dataService.abonnerFluxTabCollegues();
    this.dataService.rafraichirListeCollegues();
  }

}
