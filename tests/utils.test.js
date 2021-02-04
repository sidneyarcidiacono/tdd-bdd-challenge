const mocha = require('mocha')
const chai = require('chai')
const utils = require('../utils')
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it('should say hello', function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a('string')
  expect(hello).to.equal('Hello')
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it('should do something that you want done')
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called 'Red-Green-Refactor'
// ========================================================

it('Should return the area of a rectangle.', function() {
  const area = utils.area(12, 5)
  expect(area).to.be.a('number')
  expect(area).to.equal(60)
  expect(area).to.be.at.least(0)
})

it('Should return the perimeter of a rectangle.', function() {
  const perimeter = utils.perimeter(12, 5)
  expect(perimeter).to.be.a('number')
  expect(perimeter).to.equal(34)
  expect(perimeter).to.be.at.least(0)
})

it('Should return the area of a circle with a radius.', function() {
  const circleArea = utils.circleArea(5)
  expect(circleArea).to.be.a('number')
  expect(circleArea).to.equal((Math.PI * 5) ** 2)
  expect(circleArea).to.be.at.least(0)
})

// Stretch
it('Should return null if widths, breadths, or radii are negative.', function() {
  const nullArea = utils.area(-1, -2)
  expect(nullArea).to.equal(null)
  const nullPerimeter = utils.perimeter(-1, 3)
  expect(nullPerimeter).to.equal(null)
  const nullR = utils.circleArea(-3)
  expect(nullR).to.equal(null)
})

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of 'Pending Tests' in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it('Should create a new (object) Item with name and price', function() {
  const item = utils.createItem('apple', 0.99)
  expect(item).to.be.a('object')
  expect(item).to.have.property('name', 'apple')
  expect(item).to.have.property('price', 0.99)
  expect(item).to.have.property('quantity', 1)
})

it('Should add a new item to the shopping cart', function() {
  let item = utils.createItem('apple', 0.99)
  const shoppingCart = utils.addItemToCart(item)
  expect(shoppingCart).to.be.an('array')
  expect(shoppingCart).to.have.lengthOf(1)
  expect(shoppingCart[0]).have.all.keys({ "name": "apple", "price": 0.99, "quantity": 1})
})

it('Should return an array containing all items in cart', function() {
  utils.addItemToCart(utils.createItem('bread', 2.99))
  utils.addItemToCart(utils.createItem('banana', 1.00))
  utils.addItemToCart(utils.createItem('juice', 3.49))
  const cart = utils.getShoppingCart()
  expect(cart).to.be.an('array')
  expect(cart).to.have.lengthOf(3)
})


it('Should return the number of items in the cart', function() {
  utils.addItemToCart(utils.createItem('bread', 2.99))
  utils.addItemToCart(utils.createItem('banana', 1.00))
  utils.addItemToCart(utils.createItem('juice', 3.49))
  const numItems = utils.getNumItemsInCart()
  expect(numItems).to.be.a('number')
  expect(numItems).to.be.at.least(0)
  expect(numItems).to.equal(3)
})

it('Should remove items from cart', function() {
  utils.addItemToCart(utils.createItem('bread', 2.99))
  utils.addItemToCart(utils.createItem('banana', 1.00))
  const juice = utils.createItem('juice', 3.49)
  utils.addItemToCart(juice)
  const newCart = utils.removeItemFromCart(juice)
  expect(newCart).to.be.an('array')
  expect(newCart).to.have.lengthOf(2)
})

// ========================================================
// Stretch Challenges
// ========================================================

it('Should update the count of items in the cart', function() {
  utils.addItemToCart(utils.createItem('banana', 1.00))
  utils.addItemToCart(utils.createItem('banana', 1.00))
  const cart = utils.getShoppingCart()
  expect(cart).to.be.an('array')
  expect(cart).to.have.lengthOf(1)
  expect(cart[0]).to.have.property('quantity', 2)
})

it('Should validate that an empty cart has 0 items', function() {
  const emptyQuantity = utils.getNumItemsInCart()
  expect(emptyQuantity).to.be.a('number')
  expect(emptyQuantity).to.equal(0)
})

it('Should return the total cost of all items in the cart', function() {
  utils.addItemToCart(utils.createItem('bread', 2.99))
  utils.addItemToCart(utils.createItem('banana', 1.00))
  utils.addItemToCart(utils.createItem('juice', 3.49))
  const total = utils.totalCart()
  const shoppingCart = utils.getShoppingCart()
  expect(total).to.be.a('number')
  expect(total).to.be.at.least(0)
  expect(total).to.equal(7.48)
})
