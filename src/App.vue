<template>
  <div id="app">
    <b-navbar
      variant="light" type="light"
      toggleable="lg"
      class="px-4"
    >
      <b-navbar-brand href='/home'>Vue-ractice</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/Home">홈</b-nav-item>
          <b-nav-item to="/tarot">타로</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/layouts/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  }
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
