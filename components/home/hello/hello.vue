<template>
  <section class="hello">
    <div class="hello__block"></div>
    <img
      v-lazy="'/img/web-developer.svg'"
      alt="Web developer"
      class="hello__image"
    />
    <div class="hello__text-wrapper">
      <div>
        <span class="paragraph">
          Hello! I'm
        </span>
        <h1 class="heading">
          Javascript Developer
        </h1>
        <span class="paragraph">We can create nice things together</span>
        <a class="button" href="mailto:filip0822@gmail.com">Contact me</a>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  serverCacheKey: () => 'hello',
})
export default class Hello extends Vue {}
</script>

<style scoped lang="scss">
.hello {
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
    min-height: 30vh;
    width: 30vw;
    margin-left: 12vw;
    background: #625fe5;
    display: inline-block;
    z-index: $z-index1;
    display: grid;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
    padding: 30px 50px;
    .heading {
      margin: 20px 0;
      color: #f1f1ff;
    }
    .paragraph {
      color: #fff;
    }
  }
  &__image {
    width: 20vw;
    position: absolute;
    bottom: 100px;
    left: 100px;
  }
}
</style>
