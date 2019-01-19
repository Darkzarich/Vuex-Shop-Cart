import shop from "@/api/shop";

export default {
  state: {
    // {id, quantity}
    items: [],
    checkoutStatus: null
  },
  mutations: {
    pushProductToCart(state, productId) {
      state.items.push({
        id: productId,
        quantity: 1
      });
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
    emptyCart(state) {
      state.items = [];
    }
  },
  getters: {
    cartProducts(state, getters, rootState) {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(
          product => product.id === cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        };
      });
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    }
  },
  actions: {
    addProductToCart(context, product) {
      if (context.getters.productIsInStock(product)) {
        window.globalfoo = this;
        let cartItem = context.state.items.find(item => item.id === product.id);
        if (!cartItem) {
          context.commit("pushProductToCart", product.id);
        } else {
          context.commit("incrementItemQuantity", cartItem);
        }
        context.commit("decrementProductInventory", product);
      }
    },
    checkout(context) {
      shop.buyProducts(
        context.state.cart,
        () => {
          context.commit("emptyCart");
          context.commit("setCheckoutStatus", "success");
        },
        () => {
          context.commit("setCheckoutStatus", "fail");
        }
      );
    }
  }
};
