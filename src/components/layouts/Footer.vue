<template>
  <footer class="bg-light">
      <b-container fluid class="py-4">
        <b-row class="d-flex justify-content-evenly">
          <b-col cols="4" md="2">
            <h5>Sources</h5>
            <b-list-group>
              <b-list-group-item href="//kr.vuejs.org/">
                <b-icon icon="file-code"></b-icon>
                Vue
              </b-list-group-item>
              <b-list-group-item href="//router.vuejs.org/kr/">
                <b-icon icon="file-code"></b-icon>
                Vue Router
              </b-list-group-item>
              <b-list-group-item href="//bootstrap-vue.org/">
                <b-icon icon="file-code"></b-icon>
                Bootstrap Vue
              </b-list-group-item>
              <b-list-group-item href="//en.wikipedia.org/wiki/Rider%E2%80%93Waite_tarot_deck">
                <b-icon icon="file-image"></b-icon>
                Rider-Waite deck
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col cols="4" md="2">
            <h5>References</h5>
            <b-list-group>
              <b-list-group-item>
                <b-dropdown size="sm" text="타로" block>
                  <b-dropdown-item href="//namu.wiki/w/타로%20카드">나무위키</b-dropdown-item>
                  <b-dropdown-item href="//blog.daum.net/saju2100/category/%ED%83%80%EB%A1%9C">다음 블로그 - 담원</b-dropdown-item>
                </b-dropdown>
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col cols="4" md="2">
            <h5>Contact</h5>
            <b-list-group>
              <b-list-group-item href="//github.com/vrisel">
                <b-icon icon="github"></b-icon>
                GitHub
              </b-list-group-item>
              <b-list-group-item href="//velog.io/@vrisel">
                <b-icon icon="journal"></b-icon>
                Velog
              </b-list-group-item>
              <b-list-group-item href="//twitter.com/vrisel_p">
                <b-icon icon="twitter"></b-icon>
                Twitter
              </b-list-group-item>
              <b-list-group-item href="mailto:vrisel.p@gmail.com">
                <b-icon icon="envelope"></b-icon>
                E-mail
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid class="text-center py-3">
        <small>2021 © All Rights Reserved.</small>
      </b-container>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.list-group-item {
  background-color: inherit;
  border: inherit;
  padding-top: 0;
}
footer {
  width: 100%;
}
</style>
