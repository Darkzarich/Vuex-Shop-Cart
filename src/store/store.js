import Vue from "vue";
import Vuex from "vuex";

import shop from "@/api/shop";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    products: [],
    // {id, quantity}
    cart: []
  },
  mutations: {
    // something new and is used for setting or updating the state
    setProducts(state, products) {
      state.products = products;
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1
      });
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    }
  },
  getters: {
    // = computed
    availableProducts(state) {
      return state.products.filter(product => product.inventory > 0);
    }
  },
  actions: {
    fetchProducts(context) {
      // ...
      return new Promise(resolve => {
        shop.getProducts(products => {
          context.commit("setProducts", products);
          resolve();
        });
      });
    },

    addProductToCart(context, product) {
      if (product.inventory > 0) {
        let cartItem = context.state.cart.find(item => item.id === product.id);
        if (!cartItem) {
          context.commit("pushProductToCart", product.id);
        } else {
          context.commit("incrementItemQuantity", cartItem);
        }
        context.commit("decrementProductInventory", product);
      }
    }
  }
});
