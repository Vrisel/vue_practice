<template>
  <div>
    <form id="tarot-form" onsubmit="_tarotQuestion(event);">
      <label for="type">방식</label>
      <select name="type" id="type">
        <option value="1">기본</option>
      </select>

      <label for="tarot-question">질문</label>
      <input type="text" name="question" id="question" placeholder="질문을 입력하세요." />
      <button type="submit">질문하기</button>
    </form>
    <div id="tarot-answer"></div>
    <button type="button" id="tarot-reset" onclick="tarotReset(event);" class="disabled" disabled>다시하기</button>
  </div>
</template>

<script>
import {_tarotQuestion, _tarotReset} from '@/scripts/tarot.js'

/* document.addEventListener("DOMContentLoaded", function(){
  let question = document.getElementById('tarot-form');
  question.addEventListener('submit', '#tarot-form', function(e) {e.preventDefault(); tarotQuestion();}, false);
  let reset = document.getElementById('tarot-reset');
  reset.addEventListener('click', function(e) {e.preventDefault(); tarotReset();}, false);
}); */

export default {
  name: 'Tarot',
  methods: {
    tarotQuestion(e) {
      alert('?'); // 작동 안 함;
      e.preventDefault();
      _tarotQuestion();
    },
    tarotReset(e) {
      e.preventDefault();
      _tarotReset();
    }
  }
}
</script>

<style>
.disabled { display:none; }
</style>
