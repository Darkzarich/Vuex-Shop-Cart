<template>
<div>
    <h1>Shopping cart</h1>
    <ul
            v-for="(product, index) in products"
            :key="index"
    >
        <li>
            {{product.title}} - {{product.price | currency}} - {{product.quantity}}
        </li>
    </ul>
    <h4>Total: {{total | currency}}</h4>
    <button @click="checkout()">Purchase</button>
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "ShopCart",
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "cartTotal"
    }),

    ...mapState(["checkoutStatus"])
  },
  methods: {
    ...mapActions(["checkout"])
  }
};
</script>

<style scoped>
</style>
