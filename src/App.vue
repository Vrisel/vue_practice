<template>
  <div id="app">
    <b-navbar
      variant="light" type="light"
      toggleable="lg"
      class="mx-2"
    >
      <b-navbar-brand href='/'>Vue-ractice</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">홈</b-nav-item>
          <b-nav-item to="/tarot">타로</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <Tarot /> -->
    <router-view></router-view>
  </div>
</template>

<script>
//import Tarot from './components/Tarot.vue'

export default {
  name: 'App'/* ,
  components: {
    Tarot
  } */
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
