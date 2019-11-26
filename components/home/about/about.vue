<template>
  <section id="#about" class="about">
    <div class="container">
      <h2 class="heading-2">
        About me
      </h2>
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
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class About extends Vue {}
</script>

<style scoped lang="scss">
.about {
  margin-bottom: 50px;
  background: #f1f1ff;
  &__content {
    background:#f1f1ff;
    display: grid;
    grid-template-columns: 40% 60%;
  }
  &__text {
    width: 400px;
    text-align: justify;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: .5px;
  }
  &__image {
    justify-self: center;
    align-self: center;
    width: 100%;
    padding: 0 20%;
  }
}
</style>
