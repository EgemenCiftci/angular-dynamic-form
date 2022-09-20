import { FormGroup } from '@angular/forms';
import { FormControlWrapper } from './form-control-wrapper';

export class FormGroupWrapper {
  formGroup: FormGroup;

  constructor(
    public formControlWrappers: FormControlWrapper[],
    public label?: string
  ) {
    let obj = {};
    formControlWrappers.forEach((f) => (obj[f.name] = f.formControl));
    this.formGroup = new FormGroup(obj);
  }
}
