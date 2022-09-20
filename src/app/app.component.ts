import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InputTypes } from './enums/input-types.enum';
import { FormArrayWrapper } from './form-array-wrapper';
import { FormControlWrapper } from './form-control-wrapper';
import { FormGroupWrapper } from './form-group-wrapper';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formArrayWrapper = new FormArrayWrapper([
    new FormGroupWrapper(
      [
        new FormControlWrapper(
          'name',
          InputTypes.text,
          new FormControl(
            {
              value: 'SomeName',
              disabled: false,
            },
            [Validators.required, Validators.maxLength(10)]
          ),
          'Name: ',
          'Name'
        ),
        new FormControlWrapper(
          'surname',
          InputTypes.text,
          new FormControl(
            {
              value: '',
              disabled: false,
            },
            [Validators.required, Validators.maxLength(10)]
          ),
          'Surname: ',
          'Surname'
        ),
        new FormControlWrapper(
          'submit',
          InputTypes.submit,
          new FormControl(
            {
              value: 'Send',
              disabled: false,
            },
            []
          ),
          undefined,
          'Submit'
        ),
      ],
      'Name & Surname'
    ),
    new FormGroupWrapper(
      [
        new FormControlWrapper(
          'age',
          InputTypes.number,
          new FormControl(
            {
              value: 3,
              disabled: false,
            },
            []
          ),
          'Age: ',
          'Age'
        ),
        new FormControlWrapper(
          'gender',
          InputTypes.select,
          new FormControl(
            {
              value: 'Female',
              disabled: false,
            },
            []
          ),
          'Gender: ',
          'Gender',
          [new Option('M', 'Male'), new Option('F', 'Female')]
        ),
        new FormControlWrapper(
          'submit',
          InputTypes.submit,
          new FormControl(
            {
              value: 'Send',
              disabled: false,
            },
            []
          ),
          undefined,
          'Submit'
        ),
      ],
      'Age & Gender'
    ),
  ]);

  onSubmit(e: any) {
    const formArray = this.formArrayWrapper.formArray;
    if (!formArray.valid) {
      const errors = formArray;
      console.log(errors);
      return;
    }
    console.log(e);
  }
}
