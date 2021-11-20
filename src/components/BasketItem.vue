<template>
  <div class="basket__list__item">
    <img class="basket__list__item__image" :src="product.imageSrc" :alt="product.dish">
    <div class="basket__list__item__info">
      <p class="basket__list__item__title">{{product.dish}}</p>
      <div class="basket__list__item__actions">
        <button class="button" @click="productCountMinus">-</button>
        <button class="button" @click="productCountPlus">+</button>
    </div>
      <p class="basket__list__item__price">Цена: {{product.count}} x {{product.price}} = {{product.count * product.price}}&nbsp;₽</p>
      <button class="button basket__list__item__button" @click="deleteProductFromBasket">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteProductFromBasket() {
      this.$store.commit('removeItemFromBasket', this.$props.product);
    },

    productCountMinus() {
      this.$store.commit('subtractItemCountInBasket', this.$props.product);
    },

    productCountPlus() {
      this.$store.commit('addItemCountInBasket', this.$props.product);
    },
  },
}
</script>

<style scoped>
.basket__list__item {
  padding: 5px;
  border: 2px solid #eee;
  display: flex;
  align-items: flex-start;
}

.basket__list__item__image {
  width: 25%;
}

.basket__list__item__info {
  width: 75%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  align-items: flex-start;
}

.basket__list__item__actions button {
  margin-right: 20px;
}
</style>