import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path:"personal", component: PersonalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent =[HomeComponent,PersonalComponent];
