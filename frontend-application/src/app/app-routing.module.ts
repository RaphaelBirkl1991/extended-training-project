import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GiraffeComponent} from "./giraffe/giraffe.component";
import {HomeComponent} from "./home/home.component";
import {OtterComponent} from "./otter/otter.component";
import {RhinoComponent} from "./rhino/rhino.component";
import {TigerComponent} from "./tiger/tiger.component";
import {DonkeyComponent} from "./donkey/donkey.component";
import {MoleComponent} from "./mole/mole.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'giraffe', component: GiraffeComponent},
  {path: 'otter', component: OtterComponent},
  {path: 'rhino', component: RhinoComponent},
  {path: 'tiger', component: TigerComponent},
  {path: 'mole', component: MoleComponent},
  {path: 'donkey', component: DonkeyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
