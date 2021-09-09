<template>
  <!-- <b-container> -->
    <b-tabs
      vertical
      pills
      class="mx-0 my-4"
      nav-wrapper-class="tab-nav-sticky"
      nav-class="border-0 text-center"
    >
      <b-tab title-link-class="border-0" active>
        <template #title>
          <b-icon icon="house-door"></b-icon><br />
          Hello
        </template>
        <section class="container">
          <h2>
            <b-icon icon="house-door"></b-icon>
            Hello, World!
          </h2>
          <p>
            백&프론트 풀스택 프로그래머를 지망하는 <strong>브리셀(Vrisel)</strong>입니다.
            <ul>
              <li>
                <dfn title="새 사도신경">"나는 전능하신 아버지 하나님, 천지의 창조주를 믿습니다."</dfn>
              </li>
              <li>
                모든 사람이 사람답게 살 수 있는 세상을 꿈꿉니다.
              </li>
              <li>
                프로그래머의 <strong>사회적 역할</strong>에 대해 고민합니다.
              </li>
              <li>
                새로이 배우는 것을 좋아합니다. <br />
                <strong>배워서 남 주는 사람</strong>이 되고 싶습니다.
              </li>
            </ul>
          </p>
        </section>
      </b-tab>
      
      <b-tab title-link-class="border-0">
        <template #title>
          <b-icon icon="tools"></b-icon><br />
          기술
          <span lang="en" hidden>Skills</span>
        </template>
        <section class="container">
          <h2>
            <b-icon icon="tools"></b-icon>
            기술
            <span lang="en" hidden>Skills</span>
          </h2>
          <ul>
            <li>
              <strong>HTML, CSS</strong> 문법을 이해합니다.
            </li>
            <li>
              <strong>Python, C#, SQL, JavaScript, Java</strong> 등을 배우고 있습니다.
            </li>
            <li>
              <strong><abbr title="Model, View, Controller">MVC</abbr></strong> 구조를 배우고 있습니다.
            </li>
          </ul>
        </section>
      </b-tab>
      
      <b-tab title-link-class="border-0">
        <template #title>
          <b-icon icon="braces"></b-icon><br />
          프로젝트
          <span lang="en" hidden>Projects</span>
        </template>
        <section class="container">
          <h2>
            <b-icon icon="braces"></b-icon>
            프로젝트
            <span lang="en" hidden>Projects</span>
          </h2>
          <ul>
            <li>
              <a href="https://github.com/Vrisel/LyricsToSlide">LyricsToSlide</a>:
              가사 슬라이드를 쉽게 만들 수 있는 매크로 (Microsoft PowerPoint, 구역 기능이 있는 버전 이상에서 작동)
            </li>
          </ul>
        </section>
      </b-tab>
      
      <b-tab title-link-class="border-0">
        <template #title>
          <b-icon icon="telephone"></b-icon><br />
          연락처
          <span lang="en" hidden>Contacts</span>
        </template>
        <section class="container">
          <h2>
            <b-icon icon="telephone"></b-icon>
            연락처
            <span lang="en" hidden>Contacts</span>
          </h2>
          <address>
            <ul>
              <li>
                <b-icon icon="github"></b-icon>
                GitHub: <b-link href="//github.com/vrisel" target="blank">Vrisel</b-link>
              </li>
              <li>
                <b-icon icon="journal"></b-icon>
                Velog: <b-link href="//velog.io/@vrisel" target="blank">@Vrisel</b-link>
              </li>
              <li>
                <b-icon icon="twitter"></b-icon>
                Twitter: <b-link href="//twitter.com/vrisel_p" target="blank">브리셀 @Vrisel_p</b-link>
              </li>
              <li>
                <b-icon icon="envelope"></b-icon>
                E-mail: <b-link href="mailto:vrisel.p@gmail.com">vrisel.p@gmail.com</b-link>
              </li>
            </ul>
          </address>
        </section>
      </b-tab>
      
      <b-tab title-link-class="border-0">
        <template #title>
          <b-icon icon="tags"></b-icon><br />
          TMI
        </template>
        <section class="container">
          <h2>
            <b-icon icon="tags"></b-icon>
            <abbr title="Too Much Information">TMI</abbr>
          </h2>
          <ul>
            <li>
              <strong>Vrisel</strong>은 silver의 애너그램입니다. <br />
              이름 지을 당시에 사용하던 노트북이 은색이라서...
            </li>
            <li>
              가볍게 다뤄본 프로그래밍/스크립팅 언어들:
              <ul>
                <li>
                  mIRC에서 <abbr title="mIRC Scripting Language"><strong>mSL</strong></abbr>
                </li>
                <li>
                  Microsoft PowerPoint에서 <abbr title="Visual Basic for Applications"><strong>VBA</strong></abbr>
                </li>
                <li>
                  <abbr title="AutoHotKey"><strong>AHK</strong></abbr>, <strong>AutoIt</strong>
                </li>
              </ul>
            </li>
            <li>
              프로그래밍 언어 외에도 각종 언어들을 좋아합니다. (듀오링고 <span style="text-decoration: underline;">{{duolingo}}</span>일차)
              <ul>
                <li>
                  일상 대화가 가능한 수준:
                  <strong><dfn title="영어">English</dfn>, <dfn title="일본어">日本語</dfn></strong>
                </li>
                <li>
                  간단한 독해가 가능한 수준:
                  <strong><dfn title="독일어">Deutsch</dfn>, <dfn title="중국 표준어">普通话</dfn></strong>
                </li>
                <li>
                  발만 담가본 수준:
                  <strong><dfn title="프랑스어">Français</dfn>, <strong><dfn title="스페인어">Español</dfn>, <dfn title="아랍어">العربية</dfn></strong>
                </li>
                <li>
                  <a href="https://ko.wikipedia.org/wiki/%EC%9D%B8%EA%B3%B5%EC%96%B4" target="blank" title="">인공어</a>:
                  <strong><dfn title="퀘냐: 「반지의 제왕」으로 유명한 JRR톨킨의 작품에 등장하는 요정어 중 하나"><a href="https://ko.wikipedia.org/wiki/%EA%BF%B0%EB%83%90" target="blank">Quenya</a></dfn></strong>
                </li>
              </ul>
            </li>
            <li>
              세벌식(3-2015) 자판을 사용합니다.
            </li>
            <li>
              왼손잡이입니다. 식사는 오른손으로 합니다.
            </li>
          </ul>
        </section>
      </b-tab>
    </b-tabs>
  <!-- </b-container> -->
</template>

<script>
export default {
  name: 'Home',
  computed: {
    duolingo() {
      return parseInt(Math.ceil((new Date() - new Date(2020, 8-1, 14))/1000/60/60/24) - 25);
    }
  }
}
</script>

<style>
.tab-nav-sticky {
  position: sticky;
  top: 3.5rem;
}
</style>
