// cart.test.js
import Cart from './cart';

describe('My Cart tests', () => {
  test("The addToCart function can add an item to the cart", () => {
    const cart = new Cart();
    cart.addToCart('cheesecake');
    expect(cart.items[0]).toEqual('cheesecake');
    //expect(true).toEqual(false);
  });
})