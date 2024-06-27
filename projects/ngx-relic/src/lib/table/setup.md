## Setup

Import the **TableModule** to your desired module

```ts
import { TableModule } from "ngx-relic";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TableModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Examples

The **Options** Input allow you to configure **header** and **body** properties depending on the type of data passed to the table

The **header** object allows you to change any column's title, width and align

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  tableOptions = {
    columns: {
      name: {
        title: "Nombre",
      },
      description: {
        title: "Descripción",
      },
      created_at: {
        title: "Fecha de registro",
      },
    },
  };

  permissions = [
    {
      name: "Admin",
      description: "Permiso de administrador",
      created_at: "2024-06-26",
    },
    {
      name: "Guest",
      description: "Guest user",
      created_at: "2024-06-26",
    },
    {
      name: "Guest 1",
      description: "Guest user",
      created_at: "2024-06-26",
    },
    {
      name: "Guest 2",
      description: "Guest user",
      created_at: "2024-06-26",
    },
    {
      name: "Guest 3",
      description: "Guest user",
      created_at: "2024-06-26",
    },
    {
      name: "Guest 4",
      description: "Guest user",
      created_at: "2024-06-26",
    },
    },
  ];

  currentPage = 1;
}
```

```html
<ngx-table [currentPage]="1" [limit]="10" [options]="tableOptions" [data]="permissions">
  <ng-template appTableRow="created_at" let-row> {{ row.created_at | date }} </ng-template>
</ngx-table>
```
