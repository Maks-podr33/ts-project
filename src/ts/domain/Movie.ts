import Buyable from './Buyable';

export class Movie implements Buyable {
	readonly id: number;
	readonly name: string;
	readonly subtitle: string;
	readonly year: number;
	readonly country: string;
	readonly slogan: string;
	readonly genre: string;
	readonly time: number;
	readonly price: number;
	constructor(id: number, name: string, subtitle: string, year: number, country: string, slogan: string, genre: string, time: number, price: number) {
		this.id = id;
		this.name = name;
		this.subtitle = subtitle;
		this.year = year;
		this.country = country;
		this.slogan = slogan;
		this.genre = genre;
		this.time = time;
		this.price = price;
	}
}