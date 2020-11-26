import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
class ProductProvider extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            detailProduct: detailProduct,
            cart: [],
            modalOpen: false,
            modalProduct: detailProduct,
            count: 0,
            cartSubtotal: 0,
            cartTax: 0,
            cartTotal: 0,
        }
        this.handleDetail = this.handleDetail.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.clearCart = this.clearCart.bind(this)
    }
    componentDidMount() {
        this.setProducts()
    }
    setProducts() {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = {...item }
            tempProducts = [...tempProducts, singleItem]
            this.setState(() => {
                return { products: tempProducts }
            })
        })
    }
    getItem(id) {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail(id) {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                detailProduct: product
            }
        })
    }

    addToCart(id) {
        let tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product],
                count: this.state.count += 1
            }
        }, () => { this.addTotals() })

    }
    openModal(id) {
        const product = this.getItem(id)
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            }
        })
    }
    closeModal() {
        this.setState(() => {
            return {
                modalOpen: false
            }
        })
    }
    increment(id) {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count++
            product.total = product.count * product.price
        this.setState(() => {
            return {
                count: this.state.count + 1,
                cart: [...tempCart]
            }
        }, () => { this.addTotals() })
    }
    decrement(id) {
        let count = 0
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count--
            tempCart.map(item => {
                return count += item.count
            })
        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price
            this.setState(() => {
                return {
                    cart: [...tempCart],
                    count: count
                }
            }, () => { this.addTotals() })
        }

    }

    removeItem(id) {
        let tempProducts = [...this.state.products]
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0
        this.setState(() => {
            return {
                count: this.state.count - 1,
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => { this.addTotals() })
    }
    clearCart(products) {
        this.setState(() => {
            return {
                cart: [],
                count: 0
            }
        }, () => {
            this.addTotals()
            this.setProducts()
        })

    }
    addTotals() {
        let subTotal = 0
        this.state.cart.map(item => {
            subTotal += item.total
        })
        const tempTax = subTotal * 0.2
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total,
            }
        })
    }
    render() {
        return ( < ProductContext.Provider value = {
                {
                    ...this.state,
                        handleDetail: this.handleDetail,
                        addToCart: this.addToCart,
                        openModal: this.openModal,
                        closeModal: this.closeModal,
                        increment: this.increment,
                        decrement: this.decrement,
                        removeItem: this.removeItem,
                        clearCart: this.clearCart,
                }
            } > { this.props.children } <
            /ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };