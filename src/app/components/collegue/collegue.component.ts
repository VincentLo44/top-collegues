import { Component, Input, OnInit } from '@angular/core';
import { Collegue, Avis } from 'src/app/models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {

  @Input() paramCollegue?: Collegue;

  constructor() { }

  ngOnInit(): void {
  }

  traiterAvis(avis: Avis) {
    if (avis == Avis.AIMER) {
      this.paramCollegue!.score = this.paramCollegue!.score + 100;
    } else {
      this.paramCollegue!.score = this.paramCollegue!.score - 100;
    }
  }

}
