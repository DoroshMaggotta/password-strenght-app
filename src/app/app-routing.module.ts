import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

const routes: Routes = [
  { path: '', redirectTo: '/password-strength', pathMatch: 'full' },
  { path: 'password-strength', component: PasswordStrengthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
