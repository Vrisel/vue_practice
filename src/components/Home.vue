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
              <strong><abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr></strong> 문법을 이해합니다.
              <ul>
                <li>
                  <strong>웹 콘텐츠 접근성 지침(<abbr title="Web Content Accessiblity Guidelines">WCAG</abbr>)</strong>을 준수하기 위해 노력합니다.
                </li>
              </ul>
            </li>
            <li>
              <strong>JavaScript(JQuery, Vue.js), SQL(SQL Server), Python</strong> 등을 공부하고 있습니다.
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

          <b-table-simple>
            <b-thead>
              <b-tr>
                <b-th>프로젝트</b-th>
                <b-th>사용기술</b-th>
                <b-th>요약</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-td>
                  <b-link href="https://github.com/Vrisel/BBS_2108" target="_blank">게시판</b-link>
                </b-td>
                <b-td>
                  ASP.NET, JavaScript, JQuery, Bootstrap, SQL Server
                </b-td>
                <b-td>
                  CRUD 기능을 모두 갖춘 MVC 구조의 게시판 사이트 구현
                </b-td>
              </b-tr>
              <b-tr>
                <b-td>
                  <b-link href="//github.com/Vrisel/vrisel.github.io" target="_blank">GitPage</b-link>
                </b-td>
                <b-td>
                  <!-- HTML, CSS, JavaScript, --> Vue.js, Bootstrap
                </b-td>
                <b-td>
                  포트폴리오 용 개인 홈페이지
                </b-td>
              </b-tr>
              <b-tr>
                <b-td>
                  <b-link href="//github.com/Vrisel/LyricsToSlide" target="_blank">LyricsToSlide</b-link>
                </b-td>
                <b-td>
                  VBA
                </b-td>
                <b-td>
                  가사 슬라이드를 쉽게 만들 수 있는 매크로 (Microsoft PowerPoint, 구역 기능이 있는 버전 이상에서 작동)
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
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
            연락처 및 링크
            <span lang="en" hidden>Contacts and Links</span>
          </h2>
          <address>
            <b-list-group class="mx-4 col-xl-3 col-xl-4 col-md-5 col-6">
              <b-list-group-item href="mailto:vrisel.p@gmail.com">
                <b-icon icon="envelope"></b-icon>
                E-mail
              </b-list-group-item>
              <b-list-group-item href="//github.com/vrisel" target="blank">
                <b-icon icon="github"></b-icon>
                GitHub
              </b-list-group-item>
              <b-list-group-item href="//velog.io/@vrisel" target="blank">
                <b-icon icon="journal"></b-icon>
                Velog
              </b-list-group-item>
              <b-list-group-item href="//twitter.com/vrisel_p" target="blank">
                <b-icon icon="twitter"></b-icon>
                Twitter
              </b-list-group-item>
            </b-list-group>
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
              <strong>Vrisel</strong>은 silver의 <dfn title="철자의 위치를 뒤바꾼 문구">애너그램</dfn>입니다. <br />
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
                  <strong><dfn title="프랑스어">Français</dfn>, <dfn title="스페인어">Español</dfn>, <dfn title="아랍어"><bdi>العربية</bdi></dfn></strong>
                </li>
                <li>
                  <dfn title="의도나 목적을 가지고 만들어진 언어. 자연어와 대조됨"><a href="//ko.wikipedia.org/wiki/%EC%9D%B8%EA%B3%B5%EC%96%B4" target="blank">인공어</a></dfn>:
                  <strong><dfn title="퀘냐: 「반지의 제왕」으로 유명한 JRR톨킨의 작품에 등장하는 요정어 중 하나"><a href="https://ko.wikipedia.org/wiki/%EA%BF%B0%EB%83%90" target="blank">Quenya</a></dfn></strong>
                </li>
              </ul>
            </li>
            <li>
              <b-link href="//cafe.daum.net/3bulsik/JMKX/34" target="_blank">세벌식(3-2015) 자판</b-link>을 사용합니다.
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
      return parseInt(Math.ceil((new Date() - new Date(2020, 8-1, 14))/1000/60/60/24) - 28);
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
