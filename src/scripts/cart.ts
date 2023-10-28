// cart.ts
export default class Cart {
    public items: string[];
 
    constructor() {
       this.items = [];
    }
 
    addToCart(item: string) {
       this.items.push(item);
    }
 
    removeFromCart(item: string) {
       const filteredArray = this.items.filter((it) => it !== item);
       this.items = filteredArray;
    }
 }