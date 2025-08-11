import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWhishList = []

console.log("Welcome to the your Shopee Cart!")

// criando dois items ao carrinho
const item1 = await createItem("Hot Weels Ferrari", 20.99, 1)
const item2 = await createItem("Hot Weels Lamborghini", 39.99, 3)

// adicionei dois items no carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)

// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name)
//await cartService.deleteItem(myCart, item1.name)

// remove o primeiro item
await cartService.removeItem(myCart, 1)

// exibi o carrinho
await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)
 
