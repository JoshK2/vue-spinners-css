<template>
  <div id="app">
    <CircleLoader :loading="false" />
    <CircleLoader :loading="true" />
    <CircleLoader color="yellow" />
  </div>
</template>

<script>
import CircleLoader from './components/circle-loader.vue';

export default {
  name: 'app',
  components: {
    CircleLoader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
