import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNomPrenomValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NomPrenomValidatorDirective,
    multi: true
  }]
})
export class NomPrenomValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // si on renvoie null -> pas d'erreur
    // { nomPrenomIdentique : true } -> objet erreur lié à l'erreur de validation
    // return control.value.nom != control.value.prenom ? null : { nomPrenomIdentique : true };

    const nomCtrl = control.get('nom');
    const prenomCtrl = control.get('prenom');

    if (!nomCtrl || !prenomCtrl) {
      return null;
    } else {
      const nomSaisi = nomCtrl.value;
      const prenomSaisi = prenomCtrl.value;
      return nomSaisi && nomSaisi === prenomSaisi
        ? { nomPrenomIdentique: true }
        : null;
    }
  }

}
