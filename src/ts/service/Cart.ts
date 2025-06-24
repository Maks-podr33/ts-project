import Buyable from '../domain/Buyable';

export class Cart {
	private items: Buyable[] = [];
	private discount: number = 10;

	add(item: Buyable): void {
		this.items.push(item);
	}

	getAll(): Buyable[] {
		return [...this.items];
	}

	TotalCostNoDiscount(): number {
		return this.items.reduce((acc, obj) => acc + obj.price, 0);
	}

	TotalCostWithDiscount(): number {
		return this.items.reduce((acc, obj) => acc + (obj.price * (100 - this.discount) / 100), 0);
	}

	deleteObjCart(id: number): void {
		const found: number = this.items.findIndex((obj) => obj.id === id);
		if(found !== -1) {
			this.items.splice(found, 1);
		}
	}
}