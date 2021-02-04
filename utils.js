// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  if (w < 0 || h < 0) {
    return null
  } else {
    return w * h
  }
}

const perimeter = (w, h) => {
  // should return the perimeter
  if (w < 0 || h < 0) {
    return null
  } else {
    return (w * 2) + (h * 2)
  }
}

const circleArea = r => {
  // should return the area of the circle
  if (r < 0) {
    return null
  } else {
    return (Math.PI * r) ** 2
  }
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  createItem(item)
  if (shoppingCart.findIndex(i => i.name === item.name) != -1) {
    let index = shoppingCart.findIndex(i => i.name === item.name)
    shoppingCart[index].quantity += 1
    return shoppingCart
  } else {
    shoppingCart.push(item)
  }
  return shoppingCart
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  return shoppingCart
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  cartQuantity = 0
  for (item of shoppingCart) {
    cartQuantity += item.quantity
  }
  return cartQuantity
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  const index = shoppingCart.indexOf(item)
  if (index > -1) {
    shoppingCart.splice(index, 1);
  } else {
    shoppingCart.pop()
  }
  return shoppingCart
}

const totalCart = () => {
  // should return total price of items in cart
  if (shoppingCart.length === 0) {
    return 0
  }
  let total = 0
  for (item of shoppingCart) {
    total += item.price
  }
  return total
}

console.log(addItemToCart(createItem('banana', 0.99)))
console.log(addItemToCart(createItem('banana', 0.99)))

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, totalCart
}
