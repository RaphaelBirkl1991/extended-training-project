import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiraffeComponent } from './giraffe/giraffe.component';
import { HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { OtterComponent } from './otter/otter.component';
import { RhinoComponent } from './rhino/rhino.component';
import { TigerComponent } from './tiger/tiger.component';
import { MoleComponent } from './mole/mole.component';
import { DonkeyComponent } from './donkey/donkey.component';

@NgModule({
  declarations: [
    AppComponent,
    GiraffeComponent,
    HomeComponent,
    OtterComponent,
    RhinoComponent,
    TigerComponent,
    MoleComponent,
    DonkeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
