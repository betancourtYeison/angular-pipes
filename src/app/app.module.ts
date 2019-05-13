import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";

import localEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { DomsecurePipe } from './pipes/domsecure.pipe';
import { PasswordPipe } from './pipes/password.pipe';
registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent, CapitalizePipe, DomsecurePipe, PasswordPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
