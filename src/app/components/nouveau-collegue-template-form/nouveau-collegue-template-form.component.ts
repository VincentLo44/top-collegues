import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { CollegueForm } from './../../models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  newCollegue: CollegueForm = {
    pseudo: '',
    nom: '',
    prenom: '',
    photo: ''
  };

  messageOk?: string;
  errorMessage?: string;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
  }

  valider() {
    this.messageOk = undefined;
    this.errorMessage = undefined;

    this.dataService
    .creerCollegue(this.newCollegue)
    .subscribe({
      next: () => {
        this.messageOk = "Collègue créé";
        setTimeout(() => this.router.navigateByUrl('/accueil'), 2000);
        this.dataService.rafraichirListeCollegues();
      },
      error: () => this.errorMessage = "Oups, il y a eu un problème"
    });
  }

}
