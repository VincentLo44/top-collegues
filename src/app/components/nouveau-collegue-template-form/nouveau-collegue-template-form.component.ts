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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  valider() {
    this.dataService
    .creerCollegue(this.newCollegue)
    .subscribe(newCollegue => {
      this.newCollegue = newCollegue;
      this.dataService.rafraichirListeCollegues();
    });
  }

}
