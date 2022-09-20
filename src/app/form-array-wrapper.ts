import { FormArray } from '@angular/forms';
import { FormGroupWrapper } from './form-group-wrapper';

export class FormArrayWrapper {
  formArray: FormArray;

  constructor(public formGroupWrappers: FormGroupWrapper[]) {
    this.formArray = new FormArray(formGroupWrappers.map((f) => f.formGroup));
  }
}
