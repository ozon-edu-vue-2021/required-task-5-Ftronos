<template>
  <div class="product-list__item">
    <img class="product-list__item__image" :src="product.imageSrc" :alt="product.dish">
    <HeartSVG :class="{'favorites-icon_active': inFavorites }" class="favorites-icon" @click="toggleFavorite" ref="favoritesIcon" />
    <p class="product-list__item__title">{{product.dish}}</p>
    <p class="product-list__item__price">{{product.price}}&nbsp;₽</p>
    <div v-if="!inBasket" class="product-list__item__actions">
      <button class="button" @click="productCountMinus">-</button>
      <div class="product-list__item__counter">
        {{ count }}
      </div>
      <button class="button" @click="productCountPlus">+</button>
    </div>
    <button v-if="!inBasket" class="button" @click="addProductToBasket">В корзину</button>
    <button v-else class="button button_disabled">В корзине</button>
  </div>
</template>

<script>
import HeartSVG from "@/assets/images/icons/heart.svg";

export default {
  components: { HeartSVG },
  data() {
    return {
      count: 1
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    inBasket() {
      return this.$store.state.basket.find(product => product.uid === this.$props.product.uid)
    },

    inFavorites() {
      return this.$store.state.products.find(product => product.uid === this.$props.product.uid)?.favorite
    }
  },
  methods: {
    addProductToBasket() {
      const product = {
        product: this.$props.product,
        count: this.count
      }
      this.$store.commit('addBasketItem', product);
    },
    
    productCountPlus() {
      this.count++;
    },

    productCountMinus() {
      if (this.count === 1) {
        return;
      }

      this.count--;
    },

    toggleFavorite() {
      this.$store.commit('toggleFavorite', this.$props.product);

      console.log(this.$props.product.favorite)
    }
  }
}
</script>

<style scoped>
.product-list__item {
  padding: 5px;
  border: 2px solid #eee;
  display: flex;
  flex-direction: column;
  position: relative;
}

.product-list__item__image {
  max-width: 100%;
}

.product-list__item__title {
  flex-grow: 1;
}

.product-list__item__actions {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-list__item__counter {
  margin-left: 10px;
  margin-right: 10px;
}

.favorites-icon {
  position: absolute;
  right: 0;
  top: -10px;
  width: 20px;
  transform: translateX(50%);
  cursor: pointer;
}

.favorites-icon:hover,
.favorites-icon_active {
  fill: red;
}
</style>