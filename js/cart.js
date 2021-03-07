'use strict'

const cart = {
    cartArr: [
        {
            name: 'T-shirt US Polo',
            price: 3999,
            count: 2
        },
        {
            name: 'cap NY',
            price: 2000,
            count: 1
        },
        {
            name: 'Jeans Levis',
            price: 5999,
            count: 1
        },
        {
            name: 'Socks Nike',
            price: 998,
            count: 4
        },
        {
            name: 'Что-то классненькое',
            price: 500,
            count: 4
        }
    ],

    getCount() {
        return this.cartArr.reduce((first, second) => first + second.count, 0)
    },

    getSum() {
        return this.cartArr.reduce((first, second) => first + second.price * second.count, 0)
    },

    render() {
        let cartBlock = document.querySelector('#cart')
        if (this.cartArr.length === 0) {
            cartBlock.insertAdjacentHTML("beforeend", '<p class="cart__text"> Корзина пуста</p>')
        } else {
            cartBlock.insertAdjacentHTML("beforeend", '<p class="cart__text"> В корзине: ' + this.getCount() + ' товаров на сумму ' + this.getSum() + ' рублей</p>')
        }
        cartBlock.style.cssText = 'width: 600px; border: 2px solid brown; padding: 15px;'
    }

}
cart.render()
