<template>
  <div class="products-list">
    <product-item v-for="product in products" :key="product.uid" :product="product" />
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';


export default {
  components: { ProductItem },
  computed: {
    products() {
      return this.$store.state.products  
    }
  },
}
</script>

<style scoped>
  .products-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
</style>
