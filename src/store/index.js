import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: () => ({
    product: {id:'',uid:'',imageSrc:"",dish:"",description:"",ingredient:"",measurement:"",count:0,price:0,favorite:false},
    products: [],
    basket: [],
  }),
  mutations: {
    addBasketItem(state, obj) {
      Vue.set(state.product, 'id', obj.product.id);
      Vue.set(state.product, 'uid', obj.product.uid);
      Vue.set(state.product, 'imageSrc', obj.product.imageSrc);
      Vue.set(state.product, 'dish', obj.product.dish);
      Vue.set(state.product, 'description', obj.product.description);
      Vue.set(state.product, 'ingredient', obj.product.ingredient);
      Vue.set(state.product, 'measurement', obj.product.measurement);
      Vue.set(state.product, 'count', obj.count);
      Vue.set(state.product, 'price', obj.product.price);
      Vue.set(state.product, 'favorite', obj.product.favorite);
      
      state.basket.push({...state.product});
    },

    removeItemFromBasket(state, product) {
      const index = state.basket.findIndex(item => item.uid === product.uid);

      if (index >= 0) {
        state.basket.splice(index, 1)
      }
    },

    toggleFavorite(state, product) {
      const item = state.products.find(item => item.uid === product.uid);

      item.favorite = item.favorite === true ? false : true;
    },

    addItemCountInBasket(state, product) {
      const item = state.basket.find(item => item.uid === product.uid);

      if (item) {
        item.count++;
      }
    },
    
    subtractItemCountInBasket(state, product) {
      const item = state.basket.find(item => item.uid === product.uid);

      if (item && item.count !== 1) {
        item.count--;
      }
    },

    setProducts(state, products) {
      state.products = products;
    }
  },
  getters: {
    totalPrice(state) {
      let sum = 0;

      state.basket.forEach(item => sum += item.price * item.count);

      return sum;
    },

    favorites(state) {
      return state.products.filter(item => item.favorite === true)
    }
  },
  actions: {
    async init(context) {
      const path = require.context('@/assets/images/', false, /\.webp$/)
      const images = path.keys().map(path);

      const data = await fetch('https://random-data-api.com/api/food/random_food?size=12');
      const products = await data.json();
      products.forEach(item => {
        item.imageSrc = images[Math.floor(Math.random() * (images.length - 1) + 1)];
        item.price = Math.floor(Math.random() * (2000 - 100 + 1) + 100);
        item.favorite = false;
      })

      context.commit('setProducts', products)
    }
  }
});