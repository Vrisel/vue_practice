<template>
  <div>
    <form id="tarotForm">
      <label for="type">방식</label>
      <select name="type" id="type">
        <option value="1">기본</option>
      </select>

      <label for="question">질문</label>
      <input type="text" name="question" id="question" />
    </form>
    <div id="tarotAnswer"></div>
  </div>
</template>

<script>
import tarot from './scripts/tarot.js'

export default {
  name: 'Tarot'
}
</script>

<style>
</style>
