import Vue from "vue";
import Vuex from "vuex";

import shop from "@/api/shop";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    products: []
  },
  mutations: {
    // something new and is used for setting or updating the state
    setProducts(state, products) {
      state.products = products;
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
    }
  }
});
