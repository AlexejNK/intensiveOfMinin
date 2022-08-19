// ====================
/*
 * 1. Add Product
 * 2. Remove product
 * 3. Clear cart
 * 4. Get All Information
 */

class CartService {
  constructor() {
    this.cart = {}
  }

  add(product) {
    const key = product.id

    this.cart[key] = {
      title: product.title,
      price: product.price,
      amount: 1
    }
  }

  remove(productId) {
    const amount = this.cart[productId].amount
    if (amount === 1) {
      delete this.cart[productId]
    } else {
      this.cart[productId].amount--
    }
  }

  addProduct(productId) {
    this.cart[productId].amount++
  }

  clear() {
    this.cart = {}
  }

  getInfo() {
    const items = Object.keys(this.cart).map(id => {
      // return {
      //   id: id,
      //   title: this.cart[id].title,
      //   amount: this.cart[id].amount,
      //   price: this.cart[id].price
      // }
      return {
        id,
        ...this.cart[id]
      }
    })

    const totalPrice = items.reduce((sum, item) => {
      return sum += item.amount * item.price
    }, 0)

    return { items, totalPrice }
  }
}