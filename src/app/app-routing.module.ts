import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HideComponent } from './hide/hide.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: "data",
    component: UserProfileComponent
  },
  {
    path: "hide",
    component: HideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
