import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BioDataComponent } from './bio-data/bio-data.component';
import { HideComponent } from './hide/hide.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    BioDataComponent,
    HideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
