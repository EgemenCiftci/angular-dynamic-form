import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArrayWrapper } from './../../form-array-wrapper';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formArrayWrapper: FormArrayWrapper;
  @Output() submit = new EventEmitter<FormArrayWrapper>();

  constructor() {}

  ngOnInit() {}

  onSubmit(e: FormArrayWrapper) {
    this.submit.emit(e);
  }
}
