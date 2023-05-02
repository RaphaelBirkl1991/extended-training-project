import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GiraffeComponent} from "./giraffe/giraffe.component";



const routes: Routes = [
  {path: 'giraffe', component: GiraffeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
