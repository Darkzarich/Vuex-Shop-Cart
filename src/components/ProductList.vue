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
                {{product.title}} - {{product.price}} - {{product.inventory}}
                <button @click="addProductToCart(product)">Add product to cart</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    products() {
      return this.$store.getters.availableProducts;
    }
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    }
  },
  created() {
    this.loading = true;

    this.$store.dispatch("fetchProducts").then(() => {
      this.loading = false;
    });
  }
};
</script>

<style scoped>
</style>
