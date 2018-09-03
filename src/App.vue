<template>
  <div id="app">
    <NavigationBar/>
    <router-view/>
  </div>

</template>

<script>

  import NavigationBar from './components/NavigationBar.vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Router from 'vue-router'
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import Background from "./components/background";
  Vue.use(BootstrapVue);

  export default {

  name: 'App',
    components: {
      Background,
      'NavigationBar':NavigationBar,
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, "Al Tarikh";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
