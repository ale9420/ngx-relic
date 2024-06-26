# NgxRelic

This project was created to learn and deep dive into different frontend topics

## Installing NGX-Relic

Run `npm i ngx-relic`

## Setup

Add the following code to your styles.scss file, it is possible to customize the theme colors of the library.

```scss
@import "node_modules/ngx-relic/src/assets/scss/_main.scss";

$palette-colors: (
  slate: #64748b,
  neutral: #b6b6b6,
  danger: #bb1d1d,
  success: #10b981,
  warning: #f59e0b,
  info: #0ea5e9,
  primary: #4e59b9,
);

:root {
  $colors: setup($palette-colors);
  @include apply-theme($colors);
}
```

Import NGX-Relic module in the main module of your application

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxRelicModule } from "ngx-relic";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxRelicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Icons

The library makes use of the material icons set, you can preview the [icons](https://marella.me/material-icons/demo/)

## Documentation

[ngx-relic](https://ale9420.github.io/ngx-relic/)
