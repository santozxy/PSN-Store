import { Component, OnInit } from '@angular/core';
import { DataGamesService } from 'src/app/services/data-games.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

	games: any[] = [];

	constructor(private gamesService: DataGamesService) { }

	ngOnInit(): void {
		this.getGames();
	}

	getGames(): void {
		this.gamesService.getGames()
			.subscribe(games => this.games = games);
	}
}
