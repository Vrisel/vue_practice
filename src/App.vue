<template>
  <div id="app">
    <Header></Header>
    
    <main>
      <router-view></router-view>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/layouts/TheHeader.vue';
import Footer from '@/components/layouts/TheFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
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
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
