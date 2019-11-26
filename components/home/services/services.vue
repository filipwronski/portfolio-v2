<template>
  <section class="services">
    <div class="container">
      <h2 class="heading-2">
        Services
      </h2>
      <div class="services-list">
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              Web development
            </h3>
          </header>
          <img
            alt="Web development"
            class="services-list__image"
            src="~/assets/img/web-development.svg?data"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              Mobile app development
            </h3>
          </header>
          <img
            alt="Mobile app development"
            class="services-list__image"
            src="~/assets/img/mobile-app.svg?data"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              Progressive app development
            </h3>
          </header>
          <img
            alt="Progressive app development"
            class="services-list__image"
            src="~/assets/img/progressive-app.svg?data"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              SEO Audits
            </h3>
          </header>
          <img
            alt="Seo Audits"
            class="services-list__image"
            src="~/assets/img/seo-audits.svg?data"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              UX audits
            </h3>
          </header>
          <img
            alt="Ux audits"
            class="services-list__image"
            src="~/assets/img/ux-audits.svg?data"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              Consulting
            </h3>
          </header>
          <img
            alt="Consulting"
            class="services-list__image"
            src="~/assets/img/consulting.svg?data"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Services extends Vue {}
</script>

<style scoped lang="scss">
  .services {
    margin-bottom: 100px;
    .services-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      &__item {
        align-self: self-start;
        justify-self: center;
        background: #f1f1ff;
        height: 100%;
        padding: 20px;
      }
      &__image {
        max-width: 50%;
        align-self: center;
        justify-self: center;
        display: flex;
        margin: 0 auto;
      }
      &__title {
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
</style>
