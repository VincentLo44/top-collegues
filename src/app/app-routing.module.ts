import { DetailsCollegueComponent } from './components/details-collegue/details-collegue.component';
import { NouveauCollegueTemplateFormComponent } from './components/nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'formulaire', component: NouveauCollegueTemplateFormComponent },
  { path: 'details/:pseudo', component: DetailsCollegueComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
