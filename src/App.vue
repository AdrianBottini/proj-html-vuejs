<template>
  <div id="app">
    <HesderPage />
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
