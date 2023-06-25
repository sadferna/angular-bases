import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    //*Se importa en todos los modulos que posean componentes que hagan
    //*uso de directivas tales como ngIf, ngFor, ngSwitch, entre otras.
    CommonModule
  ]
})
export class HeroesModule {

}
