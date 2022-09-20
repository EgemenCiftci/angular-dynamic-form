import { Component, OnInit, Input } from '@angular/core';
import { InputTypes } from '../../enums/input-types.enum';
import { FormControlWrapper } from './../../form-control-wrapper';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css'],
})
export class DynamicFormControlComponent implements OnInit {
  @Input() formControlWrapper: FormControlWrapper;
  @Input() isFormArrayValid: boolean;
  @Input() isFormGroupValid: boolean;

  constructor() {}

  ngOnInit() {}

  getIsHidden() {
    if (this.formControlWrapper.type == InputTypes.submit) {
      return !(this.isFormArrayValid && this.isFormGroupValid);
    } else {
      return false;
    }
  }
}
