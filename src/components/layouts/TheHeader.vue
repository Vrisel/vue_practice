<template>
  <header>
    <b-navbar
      variant="light" type="light"
      toggleable="lg"
      class="px-4"
    >
      <b-navbar-brand href='/home'>
        <img :src="require('/src/assets/logo.png')" height="30rem" />
        Vrisel
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/home" :exact="false">홈</b-nav-item>
          <b-nav-item to="/tarot" :exact="false">타로</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 10;
}

.router-link-active {
  font-weight: 600;
}
</style>
