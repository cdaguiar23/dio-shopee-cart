// quais ações meu crrinho pode fazer

// casos de uso
// -> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}
// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

// -> remover um item - diminuir um item
async function removeItem(userCart, item) {

    // encontrar o índice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    console.log(indexFound);

    // caso nao encontre o item
    if (indexFound === -1) {
        console.log("Item não encontrado")
        return
    }

    // item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return
    } 

    // caso item = 1, deletar um item
    if (userCart[indexFound].quantity === 1) {
          userCart.splice(indexFound, 1)
        return
    }    
}

// -> calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee cart TOTAL is: ")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)

    console.log(`Total: ${result}`)
    
}

async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`- ${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x - Subtotal: R$ ${item.subtotal()}`);
    });
    
}

export  {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}