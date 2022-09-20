import { Component, Input, OnInit } from '@angular/core';
import { FormGroupWrapper } from '../../form-group-wrapper';

@Component({
  selector: 'app-dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
  styleUrls: ['./dynamic-form-group.component.css'],
})
export class DynamicFormGroupComponent implements OnInit {
  @Input() formGroupWrapper: FormGroupWrapper;
  @Input() isFormArrayValid: boolean;

  constructor() {}

  ngOnInit() {}
}
