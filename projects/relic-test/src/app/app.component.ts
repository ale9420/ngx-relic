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

  tableOptions = {
    columns: {
      name: {
        title: 'Nombre',
      },
      description: {
        title: 'Descripción',
      },
      created_at: {
        title: 'Fecha de registro',
      },
    },
  };
  listPermission = [
    {
      name: 'Admin',
      description: 'Permiso de administrador',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 1',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 2',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 3',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 4',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 5',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 6',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 7',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 8',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 9',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 10',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
    {
      name: 'Guest 11',
      description: 'Permisos basicos',
      created_at: '2024-06-26',
    },
  ];

  input = '';
  selectModel = [];

  singleSelectModel = [];

  pageActual = 1;
  form: FormGroup;

  date = null;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      select: fb.control({ value: [], disabled: true }, [Validators.required]),
      input: fb.control('', [Validators.required]),
      test: fb.control(''),
      date: fb.control(''),
    });
  }

  enable() {
    this.form.enable();
  }

  disable() {
    this.form.disable();
  }

  changePage(page: number) {
    this.pageActual = page;

    // this.getPermissions();
  }
}
