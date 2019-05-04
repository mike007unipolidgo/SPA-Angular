import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

	heroes:any[] = [];
	termino:string;

	constructor(
	private activatedRoute:ActivatedRoute,
	private heroesService:HeroesService,
	private router:Router
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			this.termino = params['termino'];
			this.heroes = this.heroesService.buscarHeroes(this.termino);
		});
	}

	private verHeroe(index:number){
		this.router.navigate(['/heroe', index]);
	}

}
