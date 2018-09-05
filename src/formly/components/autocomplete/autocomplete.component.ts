import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import {
  SamAutocompleteComponent,
  AutocompleteService
} from '../../../ui-kit';

import { AbstractSamFormly } from '../../sam-formly';
import { TestAutocompleteService } from './test.service';

@Component({
 template: `
   <sam-autocomplete [formControl]="formControl"
    [control]="formControl"
   ></sam-autocomplete>
 `,
 changeDetection: ChangeDetectionStrategy.OnPush,
 providers: [
    {
      provide: AutocompleteService,
      useClass: TestAutocompleteService
    }
  ],
})
export class SamFormlyAutocomplete extends AbstractSamFormly {
  @ViewChild(SamAutocompleteComponent)
  public template: SamAutocompleteComponent;

  constructor (_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;
  }
}

