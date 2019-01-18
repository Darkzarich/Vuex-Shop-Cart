<template>
  <div id="app">
    <ProductList/>
    <hr>
    <ShopCart/>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShopCart from "./components/ShopCart.vue";

export default {
  name: "app",
  components: {
    ProductList,
    ShopCart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
