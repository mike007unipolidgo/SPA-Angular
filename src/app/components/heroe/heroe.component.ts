import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

	heroe:any;

	constructor(
	private activatedRoute:ActivatedRoute,
	private heroesService:HeroesService
	) { }

	ngOnInit() {
		let id = this.activatedRoute.snapshot.paramMap.get('id');
		this.heroe = this.heroesService.getHeroe(id);
	}

}
