<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label>
        스프레드
        <select v-model="spread" ref="spread">
          <option disabled value="">==스프레드==</option>
          <option>기본</option>
        </select>
      </label>

      <label>
        질문
        <input type="text" placeholder="질문을 입력하세요." ref="question" v-model.lazy.trim="question" :readonly="isAsked"/>
      </label>
      <button type="submit" :disabled="isAsked">질문하기</button>
    </form>

    <div v-show="isAsked">
      <p v-html="answer"></p>
      <button type="button" @click="tarotReset">다시하기</button>
    </div>
  </div>
</template>

<script>
import tarot from '@/scripts/tarot.js';

export default {
  name: 'Tarot',
  data() {
    return {
      isAsked: false,
      answer: "",
      spread: "",
      cards: [],
      tarot
    };
  },
  methods: {
    onSubmit: function() {
      if (!this.spread) {
        alert('스프레드 방식을 선택해주세요.');
        this.$refs.spread.focus();
      }
      else if (!this.question) {
        alert('질문을 입력해주세요.');
        this.$refs.question.focus();
      }
      /* else if (!this.question.endsWith('?')) {
        alert('질문은 일반적으로 물음표로 끝나지요? :)');
        this.$refs.question.focus();
      } */
      else {
        this.isAsked = true;
        this.cards.push(this.getRandomCard());
        this.answer = `뽑은 카드는 <strong>${Math.random() > 0.5 ? '정' : '역'}방향</strong>의 <strong>${this.cards[0].name} 카드</strong> 입니다.<br/>`;
        this.answer += `이 카드는 <strong>${this.cards[0].desc}</strong>을(를) 의미합니다.`;
        //this.$refs.resetBtn.focus(); //v-if나 v-show가 동작하기 이전에 focus를 잡으려고 해서인지 워닝 뜸
      }
    },
    tarotReset: function () {
      if (window.confirm('다시 하시겠습니까?')) {
        this.cards = [];
        this.isAsked = false;
        this.answer = "";
        this.question = "";
        this.$refs.question.focus();
      }
    },
    getRandomCard: function() {
      let a = ['M', 'c', 's', 'h', 'd'][Math.floor(Math.random() * 5)];
      let b;
      if (a === 'M') {
        b = Math.floor(Math.random() * 22);
      }
      else {
        b = Math.floor(Math.random() * 14) + 1;
        switch (b) {
          case 11: b = 'P'; break;
          case 12: b = 'N'; break;
          case 13: b = 'Q'; break;
          case 14: b = 'K'; break;
          default: break;
        }
      }
      return tarot[a+b];
    }
  }
}
</script>

<style>
</style>
