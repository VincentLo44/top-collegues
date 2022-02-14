import { DataService } from './../../services/data.service';
import { Collegue, CollegueDetails } from './../../models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-collegue',
  templateUrl: './details-collegue.component.html',
  styleUrls: ['./details-collegue.component.scss']
})
export class DetailsCollegueComponent implements OnInit {

  currentCollegue: CollegueDetails = {
    photo: '',
    pseudo: '',
    score: 0,
    nom: '',
    prenom: ''
  };

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.getCollegueDetails(this.route.snapshot.params['pseudo']);
  }

  getCollegueDetails(pseudo: string) {
    this.dataService.getCollegueByPseudo(pseudo).subscribe(
      data => {
        this.currentCollegue = data;
      }
    )
  }

}
