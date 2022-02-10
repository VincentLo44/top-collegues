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

  constructor() { }

  ngOnInit(): void {
  }

  traiterAvis(avis: Avis) {
    if (this.paramCollegue) {
      if (avis == Avis.AIMER) {
        this.paramCollegue.score = this.paramCollegue.score + 100;
      } else {
        this.paramCollegue.score = this.paramCollegue.score - 100;
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
