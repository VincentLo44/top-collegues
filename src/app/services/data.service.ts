import { Avis, Vote } from './../models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collegue } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://formation-angular-collegues.herokuapp.com/api/v1/';

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


}
