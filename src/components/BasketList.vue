<template>
  <div>
    <div v-if="products.length" class="basket">
      <div class="basket__list">
        <basket-item v-for="product in products" :key="product.uid" :product="product" />
      </div>
      <div class="basket__sidebar">
        <p>Общая сумма: {{totalPrice}}&nbsp;₽</p>
        <button class="button basket__button" @click="showBasket">Оформить заказ</button>
      </div>
    </div>
    <h1 v-else>В корзине нет товаров!</h1>
  </div>
</template>

<script>
import BasketItem from './BasketItem.vue';

export default {
  components: { BasketItem },
  computed: {
    products() { 
      return this.$store.state.basket;
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  },
  methods: {
    showBasket() {
      const basketList = this.$store.state.basket.map(item => {return item.dish});

      alert(basketList.join(', '))
    }
  }
}
</script>

<style scoped>
  .basket {
    display: flex;
  }

  .basket__list {
    width: 75%;
    padding-right: 10px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .basket__sidebar {
    padding-left: 10px;
  }
</style>
