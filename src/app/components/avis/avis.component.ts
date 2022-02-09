import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis, Collegue } from 'src/app/models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() avisEvt = new EventEmitter<Avis>();

  @Input() actifAimer: boolean = false;
  @Input() actifDetester: boolean = false;

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
