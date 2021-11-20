<template>
  <div id="app">
    <p>
        <router-link to="/">Список товаров</router-link>&nbsp;
        <router-link to="/basket">Корзина</router-link>&nbsp;
        <router-link to="/favorites">Избранное</router-link>
    </p>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  async beforeCreate() {
    this.$store.dispatch('init')
  },
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #2c3e50;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

 @import './assets/css/main.css';
</style>
