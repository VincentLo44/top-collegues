import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis, Collegue } from 'src/app/models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() avisEvt = new EventEmitter<Avis>();

  // pas nécessaire de mettre le type quand on initialise
  @Input() actifAimer = false;
  @Input() actifDetester = false;

  constructor() { }

  ngOnInit(): void {
  }

  aimer() {
    this.avisEvt.emit(Avis.AIMER);
  }

  detester() {
    this.avisEvt.emit(Avis.DETESTER);
  }

}
