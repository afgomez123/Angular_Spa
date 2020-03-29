import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../servicios/heroes.service";
import { Router } from "@angular/router";
import { FnParam } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-sear-heroes",
  templateUrl: "./sear-heroes.component.html",
  styles: []
})
export class SearHeroesComponent implements OnInit {
  heroe: any = {};
  termino: string;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.termino = data["id"];
      this.heroe = this.heroesService.buscarHeroes(data["id"]);
      // console.log(this.heroe);
    });
  }

  verHeroe(idx: number) {
    // console.log(idx);
    this.router.navigate(["/heroe", idx]);
  }
}
