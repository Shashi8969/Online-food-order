import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { food } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart()
  addToCart(food: food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }
  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
  }
  getCart(): Cart {
    return this.cart;
  }
}
