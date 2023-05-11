import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {AddVideoComponent} from "./add-video/add-video.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add-video', component: AddVideoComponent },
  { path: 'nav', component: NavComponent }, // Add this line

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
