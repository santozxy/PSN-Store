import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-pricing',
	templateUrl: './card-pricing.component.html',
	styleUrls: ['./card-pricing.component.css'],
})
export class CardPricingComponent implements OnInit {
	@Input()
	gameName: string = '';
	@Input()
	gameType: string = '';
	@Input()
	gamePrice: string = '';
	constructor() {}

	ngOnInit(): void {}
}
