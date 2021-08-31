<template>
  <b-container id="tarot" class="justify-content-center my-4">
    <b-form @submit.prevent="onSubmit" class="row mb-5">
      <b-row class="gx-0 mb-3">
        <b-col lg="1" cols="2">
          <label>스프레드</label>
        </b-col>
        <b-col>
          <b-form-select
            v-model="spread"
            :options="spreadOptions"
            required
            :disabled="isAsked"
            ref="spread"
          >
            <template #first>
              <b-form-select-option disabled :value="null">==스프레드==</b-form-select-option>
            </template>
          </b-form-select>
        </b-col>
      </b-row>
          
      <b-row class="gx-0 mb-3">
        <b-col lg="1" cols="2">
          <label>질문</label>
        </b-col>
        <b-col>
          <b-form-input
            type="text"
            placeholder="질문을 입력하세요."
            required
            :disabled="isAsked"
            v-model.lazy.trim="question"
            ref="question"
          />
        </b-col>
      </b-row>
      
      <b-button type="submit" :disabled="isAsked" block variant="primary">카드 보기</b-button>
    </b-form>

    <div v-if="isAsked" class="row">
      <b-table-simple outlined no-border-collapse responsive class="px-0">
        <b-thead><b-tr>
          <b-th variant="secondary" sticky-column>의미</b-th>
          <b-th variant="light" v-for="i of cards.length" :key="i">{{ description[spread][i-1] }}</b-th>
        </b-tr></b-thead>
        <b-tbody>
          <b-tr>
            <b-th variant="secondary" rowspan="2" sticky-column>카드</b-th>
            <b-td v-for="i of cards.length" :key="i">
              <img
                :src="require(`/src/assets/img/tarot/${cards[i-1]}.jpg`)"
                :title="tarot[cards[i-1]].name"
                :alt="tarot[cards[i-1]].name"
                width="120px"
              />
            </b-td>
          </b-tr>
          <b-tr>
            <b-td v-for="i of cards.length" :key="i">
              {{ tarot[cards[i-1]].name }}
            </b-td>
          </b-tr>
          <b-tr>
            <b-th variant="secondary" sticky-column>상징</b-th>
            <b-td v-for="i of cards.length" :key="i">{{ tarot[cards[i-1]].desc }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      
      <b-button type="button" @click="tarotReset" block variant="secondary">다시하기</b-button>
    </div>
  </b-container>
</template>

<script>
import {tarot, description} from '@/scripts/tarot.js';

export default {
  name: 'Tarot',
  data() {
    return {
      isAsked: false,
      spread: "",
      question: "",
      cards: [],
      tarot, description,

      spreadOptions: [
        { value: "1", text: '원 카드'},
        { value: "3", text: '쓰리 카드'},
        { value: "hoof", text: '말발굽'},
        { value: "moon", text: '보름달'},
        { value: 'cross', text: '켈트 십자가'},
        { value: 'tree', text: '생명의 나무'}
      ]
    };
  },
  methods: {
    onSubmit: function() {
      /* if (!this.question.endsWith('?')) {
        alert('질문은 일반적으로 물음표로 끝나지요? :)');
        this.$refs.question.focus();
        return false;
      } */
      
      this.cards = [];
      switch (this.spread) {
        case "1": this.getRandomCard(1); break;
        case "3": this.getRandomCard(3); break;
        case "hoof": this.getRandomCard(5); break;
        case "moon": this.getRandomCard(7); break;
        case "cross": this.getRandomCard(10); break;
        case "tree": this.getRandomCard(10); break;
        default: break;
      }

      this.isAsked = true;
      
      //this.$refs.resetBtn.focus(); //v-if나 v-show가 동작하기 이전에 focus를 잡으려고 해서인지 워닝 뜸
    },
    tarotReset: function () {
      if (window.confirm('다시 하시겠습니까?')) {
        this.cards = [];
        this.isAsked = false;
        this.question = "";
        this.$refs.question.focus();
      }
    },
    getRandomCard: function(i) {
      if (i <= 0) return;

      let a = ['M', 'w', 's', 'c', 'p'][Math.floor(Math.random() * 5)];
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
    }
  }
}
</script>

<style scoped>
#tarot {
  text-align: start;
}

/* tr { border-bottom-color: black !important; border-bottom-width: 1px !important; } */
th, td {
  text-align: center !important;
  border-color: grey !important;
  border-width: 1px !important;
}
th { min-width: 60px;}

/* @media (max-width: 700px) {
  thead, tbody, th, td { display: block; }
  tr { float: left; }

  thead th:not(:first-child) { border-bottom-color: #dee2e6 !important; }
  tbody th { border-bottom-color: currentColor; }

  thead th { width: 180px; }
  tbody tr { width: 200px; }
  thead th:not(:first-child), td { height: 250px; }
} */
</style>
