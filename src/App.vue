<template>
  <div id="app">
    <Tarot />
  </div>
</template>

<script>
import Tarot from './components/Tarot.vue'

export default {
  name: 'App',
  components: {
    Tarot
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
