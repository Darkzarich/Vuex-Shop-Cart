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
    <h5>Total: {{total | currency}}</h5>
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
