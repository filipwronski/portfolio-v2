<template>
  <header class="main-header">
    <div class="main-header__wrapper container">
      <logo />
      <navigation
        :nav-list="navList"
        :social-nav-list="socialNavList"
      />
    </div>
  </header>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import navigation from '~/components/navigation/navigation.vue'
import logo from '~/components/header/logo/logo.vue'

@Component({
  serverCacheKey: () => 'header',
  components: {
    navigation,
    logo
  }
})
export default class MainHeader extends Vue {
  navList = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Skills',
      url: '/skills'
    },
    {
      title: 'Contact',
      url: '/contact'
    }
  ]

  socialNavList = [
    {
      title: 'home',
      url: '/'
    }
  ]
}
</script>

<style scoped lang="scss">
.main-header {
  top: 0;
  left: 0;
  width: 100%;
  background: #f1f1ff;
  &__wrapper {
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: center;
  }
}
</style>
