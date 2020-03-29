import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(data => {
      this.heroe = this.heroesService.getHeroe(data["id"]);
      // console.log(this.heroe);
    });
  }

  backHeroes() {
    this.router.navigate(["/heroes"]);
  }
}
