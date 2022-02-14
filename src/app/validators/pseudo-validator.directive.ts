import { Collegue } from 'src/app/models';
import { DataService } from './../services/data.service';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';

@Directive({
  selector: '[appPseudoValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: PseudoValidatorDirective,
    multi: true
  }]
})
export class PseudoValidatorDirective implements AsyncValidator {

  constructor(private dataService: DataService) { }

  validate(control: AbstractControl): | Observable<ValidationErrors | null> {
    // return this.dataService.getPseudoCollegue(control.value)
    // .pipe(map(
    //   (collegue: Collegue) => {
    //     return (collegue.pseudo) ? null : { "pseudoExists" : true};
    //   }
    // ));

    if(!control.value){
      return of(null); // Ok
    }

    return this.dataService.getPseudoCollegue(control.value) // Observable<Collegue>
          .pipe(
            // pseudo est trouvé => erreur { pseudoTrouve : true}
            map(() => ({ pseudoTrouve : true})),
            // si erreur, donc pseudo non trouvé, alors pas d'erreur de validation
            catchError(() => of(null))
          );
  }

}
