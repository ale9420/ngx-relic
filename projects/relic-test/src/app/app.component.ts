import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'relic-test';

  options = [
    {
      id: 1,
      name: 'Admin',
    },
    {
      id: 2,
      name: 'Comercial',
    },
    {
      id: 3,
      name: 'Mesa de gestion',
    },
    {
      id: 4,
      name: 'Mesa de gestion 1',
    },
    {
      id: 5,
      name: 'Mesa de gestion 2',
    },
    {
      id: 6,
      name: 'Mesa de gestion 3',
    },
    {
      id: 7,
      name: 'Mesa de gestion 4',
    },
  ];

  input = '';
  selectModel = [];

  singleSelectModel = [];
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      select: fb.control({ value: [], disabled: true }, [Validators.required]),
      input: fb.control('', [Validators.required]),
      test: fb.control(''),
    });
  }

  enable() {
    this.form.enable();
  }

  disable() {
    this.form.disable();
  }
}
