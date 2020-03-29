import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// rutas
import { APP_ROUTING } from "./app.routes";
// servicios
import { HeroesService } from "./servicios/heroes.service";
// componentes
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearHeroesComponent } from './components/sear-heroes/sear-heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearHeroesComponent,
    HeroeTarjetaComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [
    // Aca van todos nuestros servicios
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
