import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CercaMeteoComponent } from './cerca-meteo/cerca-meteo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'CercaMeteo', component: CercaMeteoComponent},
  { path: 'Home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
