import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Collegue, Avis } from 'src/app/models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() paramCollegue?: Collegue;

  btnAimerInactif = false;
  btnDetesterInactif = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.affichageBtn();
  }

  traiterAvis(avis: Avis) {
    if (this.paramCollegue) {
      if (avis == Avis.AIMER) {
        this.dataService
          .donnerUnAvis(this.paramCollegue.pseudo, avis)
          .subscribe(vote => {
            this.paramCollegue = vote;
          });
      } else {
        this.dataService
          .donnerUnAvis(this.paramCollegue.pseudo, avis)
          .subscribe(vote => {
            this.paramCollegue = vote;
          });
      }
      this.affichageBtn();
    }

  }

  affichageBtn() {
    if (this.paramCollegue) {
      this.btnAimerInactif = (this.paramCollegue.score >= 1000) ? true : false;
      this.btnDetesterInactif = (this.paramCollegue.score <= -1000) ? true : false;
    }
  }

}
