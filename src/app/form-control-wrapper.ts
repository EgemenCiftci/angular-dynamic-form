import { KeyValue } from '@angular/common';
import { FormControl } from '@angular/forms';
import { InputTypes } from './enums/input-types.enum';
import { Option } from './option';

export class FormControlWrapper {
  constructor(
    public name: string,
    public type: InputTypes,
    public formControl: FormControl,
    public label?: string,
    public tooltip?: string,
    public options?: Option[]
  ) {}
}
