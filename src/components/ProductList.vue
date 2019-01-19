<template>
    <div>
        <h1>Product List</h1>
        <img
            src="https://i.imgur.com/JfPpwOA.gif"
            alt="loading"
            v-if="loading"
        >
        <ul v-else>
            <li v-for="(product, index) in products" v-bind:key="index">
                {{product.title}} - {{product.price | currency}} - {{product.inventory}}
                <button
                    @click="addProductToCart(product)"
                    :disabled="!productIsInStock(product)"
                >
                    Add product to cart
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "ProductList",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    // ... operator is ES7 Spread, is there to merge objects while mapState and mapGetters return

    ...mapState(["products"]),

    ...mapGetters(["productIsInStock"])
  },
  methods: {
    ...mapActions(["fetchProducts", "addProductToCart"])
  },
  created() {
    this.loading = true;

    this.fetchProducts().then(() => {
      this.loading = false;
    });
  }
};
</script>

<style scoped>
</style>
