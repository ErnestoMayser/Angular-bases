import {NgModule} from "@angular/core";
import {HeroComponent} from "./Hero/hero.component";
import {ListComponent} from "./List/list.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
