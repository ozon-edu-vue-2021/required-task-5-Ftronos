<template>
  <div>
    <div v-if="favorites.length" class="products-list">
      <product-item v-for="product in favorites" :key="product.uid" :product="product" />
    </div>
  <h1 v-else>В избранном нет товаров!</h1>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';


export default {
  components: { ProductItem },
  computed: {
    favorites() { 
      return this.$store.getters.favorites
    },
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
