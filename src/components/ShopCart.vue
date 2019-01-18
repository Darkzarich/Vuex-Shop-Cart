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
    <button @click="$store.dispatch('checkout')">Purchase</button>
    <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p>
</div>
</template>

<script>
export default {
  name: "ShopCart",
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    }
  }
};
</script>

<style scoped>
</style>
