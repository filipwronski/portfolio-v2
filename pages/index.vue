<template>
  <div class="home">
    <main-header />
    <section class="first-section">
      <div class="first-section__block">
      </div>
      <div class="first-section__text-wrapper">
        <div>
          <span class="paragraph">Hello! I'm</span>
          <h1 class="heading">
            Javascript Developer
          </h1>
          <span class="paragraph">We can create nice things together</span>
          <a class="button" href="mailto:filip0822@gmail.com">Contact me</a>
        </div>
      </div>
    </section>
    <section id="#about" class="about">
      <div class="about__title-wrapper">
        <div class="container">
          <h2 class="heading-2">
            About me
          </h2>
        </div>
      </div>
      <div class="container">
        <div class="about__content">
          <p class="about__text">
            Pracuję jako Full-stack developer od 2014 roku, łączę technologie backendowe i
            frontendowe ponieważ cenię sobie samodzielność i niezależność w czasie
            realizacji
            projektu. Nie zmienia to faktu, że lubię pracować w zespole zarówno jako osoba,
            która
            zdobywa doświadczenie oraz jako osoba która dzieli się doświadczeniem.
          </p>
          <img
            alt="Man thinking about master plan"
            class="about__image"
            src="~/assets/img/undraw_master_plan_95wa.svg?data"
          />
        </div>
      </div>
    </section>
    <section class="experience">
      <h2 class="heading-2">
        Skills
      </h2>
      <div class="experience">
      </div>
    </section>
    <section class="services">
      <h2 class="heading-2">
        Skills
      </h2>
      <div class="services">
      </div>
    </section>
    <section class="skills">
      <h2 class="heading-2">
        Skills
      </h2>
      <div class="skills__frontend">
        <h3 class="heading-3">
          Front-end
        </h3>
        <ul>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>Vuex</li>
          <li>PWA</li>
          <li>Jest</li>
          <li>Cypress.js</li>
          <li>HTML</li>
          <li>SASS</li>
          <li>CSS</li>
        </ul>
      </div>
      <div class="skills__frontend">
        <h3 class="heading-3">
          Back-end
        </h3>
        <ul>
          <li>PHP</li>
          <li>Node.js</li>
          <li>Symfony</li>
          <li>Express.js</li>
          <li>GraphQl</li>
          <li>REST</li>
        </ul>
      </div>
    </section>
    <section class="contact">
      <h2 class="heading-2">
        Skills
      </h2>
      <div class="contact">
      </div>
    </section>
    <footer class="footer">
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import mainHeader from '~/components/header/header.vue'
@Component({
  components: {
    mainHeader
  }
})
export default class Home extends Vue {
}

</script>

<style lang="scss">
.home {
  position: relative;
}
.first-section {
  min-height: calc(100vh - 55px);
  display: grid;
  position: relative;
  &__block {
    position: absolute;
    height: 100%;
    width: 50vw;
    top: 0;
    right: 0;
    background: #f1f1ff;
    z-index: $z-index0;
  }
  &__text-wrapper {
    height: 30vh;
    min-width: 30vw;
    background: #7474ff;
    display: inline-block;
    z-index: $z-index1;
    display: grid;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
    padding: 20px 50px;
    .heading {
      margin: 20px 0;
      color: #f1f1ff;
    }
    .paragraph {
      color: #fff;
    }
  }
}
.about {
  &__title-wrapper {
    background: #f1f1ff;
    padding: 10px;
    .heading-2 {
      padding-left: 20px;
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  &__content {
    background:#f1f1ff;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-column-gap: 40px;
  }
  &__text {
    width: 400px;
    text-align: justify;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: .5px;
    padding: 20px;
    padding-top: 40px;
  }
  &__image {
    justify-self: center;
    align-self: center;
    width: 100%;
    padding: 0 20%;
  }
}
</style>
