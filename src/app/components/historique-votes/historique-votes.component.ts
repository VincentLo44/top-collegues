import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Vote } from 'src/app/models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  listeVotes: Vote[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const obsVote = this.dataService.listerVotes();
    obsVote.subscribe(
      data => {
        this.listeVotes = data;
      }
    );
  }

  supprimerVote(index: number) {
     this.listeVotes.splice(index, 1);
  }

}
