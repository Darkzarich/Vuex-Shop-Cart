import shop from "@/api/shop";

export default {
  state: {
    items: []
  },
  mutations: {
    // something new and is used for setting or updating the state
    setProducts(state, products) {
      state.items = products;
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    }
  },
  getters: {
    // = computed
    productIsInStock() {
      return product => {
        return product.inventory > 0;
      };
    }
  },
  actions: {
    fetchProducts(context) {
      return new Promise(resolve => {
        shop.getProducts(products => {
          context.commit("setProducts", products);
          resolve();
        });
      });
    }
  }
};
