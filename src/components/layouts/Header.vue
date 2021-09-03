<template>
  <header>
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
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
</style>
