import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  listeCollegues: Collegue[] = [];

  constructor(private dataService: DataService) {
    const obsCollegues = this.dataService.listerCollegues();
    obsCollegues.subscribe(
      data => {
        this.listeCollegues = data;
      }
    );
  }

  ngOnInit(): void {
  }

}
