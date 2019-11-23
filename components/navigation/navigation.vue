<template>
  <div class="navigation">
    <nav class="navigation__main">
      <ul>
        <li v-for="navLink in navList" :key="navLink.url">
          <nuxt-link :to="navLink.url" :title="navLink.title">
            {{ navLink.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <!-- <nav class="navigation__social-media">
      <ul>
        <li v-for="navLink in socialNavList" :key="navLink.url">
          <nuxt-link :to="navLink.url" :title="navLink.title">
            <img :src="navLink.icon" />
          </nuxt-link>
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface NavigationLink {
  title: string;
  url: string;
  icon?: string;
}

@Component
export default class Navigation extends Vue {
  @Prop({
    type: Array,
    required: true
  }) navList: NavigationLink[];

  @Prop({
    type: Array,
    required: true
  }) socialNavList: NavigationLink[];
}
</script>

<style lang="scss" scoped>
.navigation {
  display: inline-block;
  justify-self: flex-end;
  z-index: $z-index1;
  &__main {
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin-left: 40px;
      position: relative;
      &:after {
        content: '';
        height: 1px;
        background: #7474ff;
        width: 20px;
        position: relative;
        display: block;
        margin: 0 auto;
        bottom: 0;
        position: absolute;
        left: calc(50% - 10px);
      }
    }
    a {
      text-decoration: none;
      color: #000;
      letter-spacing: 1px;
      font-size: 14px;
    }
  }
}
</style>
