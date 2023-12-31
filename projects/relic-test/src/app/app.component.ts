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
  ];

  selectModel = [];

  singleSelectModel = [];
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      select: fb.control({ value: [], disabled: true }, [Validators.required]),
    });

    //this.form.get('select')?.disable();
  }

  enable() {
    this.form.get('select')?.enable();
  }

  disable() {
    this.form.get('select')?.disable();
  }
}
