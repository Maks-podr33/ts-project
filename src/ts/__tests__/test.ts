import { Movie } from '../domain/Movie';
import { Cart } from '../service/Cart';

test('Making class Movie', () => {
	const movie = new Movie(100, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключение', 137, 500);
	const result = {
		id: 100, 
		name: 'Мстители', 
		subtitle: 'The Avengers', 
		year: 2012, 
		country: 'США', 
		slogan: 'Avengers Assemble', 
		genre: 'фантастика, боевик, фэнтези, приключение', 
		time: 137, 
		price: 500
	}
	expect(movie).toEqual(result)
})

test('Making class Cart', () => {
	const cart = new Cart();
	const result = {
		'discount': 10,
		'items': [],
	};
	expect(cart).toEqual(result);
})

test('Check add', () => {
	const movie = new Movie(100, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключение', 137, 500);
	const cart = new Cart();
	cart.add(movie);
	const result = {
		'discount': 10,
		'items': [
			{
				'country': 'США',
				'genre': 'фантастика, боевик, фэнтези, приключение',
				'id': 100,
				'name': 'Мстители',
				'price': 500,
				'slogan': 'Avengers Assemble',
				'subtitle': 'The Avengers',
				'time': 137,
				'year': 2012,
			}
		],
	}
	expect(cart).toEqual(result);
})

test('Check getAll', () =>{
	const movie = new Movie(100, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключение', 137, 500);
	const cart = new Cart();
	cart.add(movie);
	const result = [
			{
				'country': 'США',
				'genre': 'фантастика, боевик, фэнтези, приключение',
				'id': 100,
				'name': 'Мстители',
				'price': 500,
				'slogan': 'Avengers Assemble',
				'subtitle': 'The Avengers',
				'time': 137,
				'year': 2012,
			}
		]
	expect(cart.getAll()).toEqual(result);
})

test('Check TotalCostNoDiscount', () => {
	const movie1 = new Movie(100, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключение', 137, 500);
	const movie2 = new Movie(120, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключение', 137, 1500);
	const cart = new Cart();
	cart.add(movie1);
	cart.add(movie2);
	expect(cart.TotalCostNoDiscount()).toBe(2000)
})

test('Check TotalCostWithDiscount', () => {
	const movie1 = new Movie(100, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключение', 137, 500);
	const movie2 = new Movie(120, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключение', 137, 1500);
	const cart = new Cart();
	cart.add(movie1);
	cart.add(movie2);
	expect(cart.TotalCostWithDiscount()).toBe(1800)
})

test('Check deleteObjCart', () => {
	const movie = new Movie(100, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключение', 137, 500);	
	const cart = new Cart();
	cart.add(movie);
	const result = {
		'discount': 10,
		'items': [],
	};
	cart.deleteObjCart(100);
	expect(cart).toEqual(result);
})