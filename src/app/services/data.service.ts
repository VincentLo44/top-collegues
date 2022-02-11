import { Avis, Vote, CollegueForm } from './../models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, Subject } from 'rxjs';
import { Collegue } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://formation-angular-collegues.herokuapp.com/api/v1/';

  private busTabCollegues = new Subject<Collegue[]>();

  constructor(private http: HttpClient) { }

  listerCollegues() : Observable<Collegue[]> {
    return this.http.get<Collegue[]>(this.apiUrl + "collegues");
  }

  donnerUnAvis(pseudo: string, avis: Avis) : Observable<Collegue> {
    return this.http.post<Collegue>(this.apiUrl + "votes", {
      pseudo,
      avis
    });
  }

  listerVotes() : Observable<Vote[]> {
    return this.http.get<Vote[]>(this.apiUrl + "votes");
  }

  abonnerFluxTabCollegues(): Observable<Collegue[]> {
    return this.busTabCollegues.asObservable();
  }

  rafraichirListeCollegues() {
    this.busTabCollegues.next([]);
    this.listerCollegues()
      .subscribe(
        colsServeur => this.busTabCollegues.next(colsServeur)
      );
  }

  creerCollegue(collegue: CollegueForm) : Observable<CollegueForm> {
    return this.http.post<CollegueForm>(this.apiUrl + "collegues", {
      pseudo: collegue.pseudo,
      nom: collegue.nom,
      prenom: collegue.prenom,
      photo: collegue.photo
    });
  }

  getPseudoCollegue(pseudo: string) : Observable<Collegue> {
    return this.http.get<Collegue>(this.apiUrl + "collegues/pseudo");
  }


}
