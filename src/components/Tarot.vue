<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label>
          스프레드
          <select v-model="spread" ref="spread" :disabled="isAsked">
            <option disabled value="">==스프레드==</option>
            <option value="1">원 카드</option>
            <option value="3">쓰리 카드</option>
            <!-- <option value="5">말발굽</option>
            <option value="7">보름달</option>
            <option value="a">켈트 십자가</option>
            <option value="b">생명의 나무</option> -->
          </select>
        </label>
      </div>

      <div>
        <label>
          질문
          <input type="text" placeholder="질문을 입력하세요." ref="question" v-model.lazy.trim="question" :disabled="isAsked"/>
        </label>
        <button type="submit" :disabled="isAsked">질문하기</button>
      </div>
    </form>

    <div v-if="isAsked">
      <table>
        <thead><tr>
          <th>의미</th>
          <th>카드</th>
          <th>상징</th>
        </tr></thead>
        <tbody><tr v-for="i of cards.length" :key="i">
          <th>{{descriptions[i-1]}}</th>
          <td>{{tarot[cards[i-1]].name}}</td>
          <td>{{tarot[cards[i-1]].desc}}</td>
        </tr></tbody>
      </table>
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
      spread: "",
      question: "",
      cards: [],
      descriptions: [],
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
        this.cards = [];
        switch (this.spread) {
          case "1": this.getRandomCard(1); break;
          case "3": this.getRandomCard(3); break;
          default: break;
        }
        this.descriptions = [];
        this.getDescriptions();

        this.isAsked = true;
        
        //this.$refs.resetBtn.focus(); //v-if나 v-show가 동작하기 이전에 focus를 잡으려고 해서인지 워닝 뜸
      }
    },
    tarotReset: function () {
      if (window.confirm('다시 하시겠습니까?')) {
        this.cards = [];
        this.descriptions = [];
        this.isAsked = false;
        this.question = "";
        this.$refs.question.focus();
      }
    },
    getRandomCard: function(i) {
      if (i <= 0) return;

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
      if (!this.cards.includes(a+b)) {
        this.cards.push(a+b);
        i -= 1;
      }
      this.getRandomCard(i);
    },
    getDescriptions: function() {
      switch (this.spread) {
        case "1":
          this.descriptions.push("-");
          break;
        case "3":
          this.descriptions.push(
            "원인/과거/아침",
            "과정/현재/낮",
            "결과/미래/밤"
          );
          break;
      }
    }
  }
}
</script>

<style>
</style>
