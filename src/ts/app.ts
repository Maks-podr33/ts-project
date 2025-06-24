import { Cart } from './service/Cart';
import { Movie } from './domain/Movie';

const cart = new Cart();

cart.add(new Movie(100, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble', 'фантастика, боевик, фэнтези, приключение', 137, 500));

console.log(cart.getAll())