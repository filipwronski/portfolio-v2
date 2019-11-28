<template>
  <div class="home">
    <main-header />
    <hello />
    <about />
    <services />
    <skills />
    <experience />
    <contact />
    <main-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    mainHeader: () => import('~/components/header/header.vue'),
    hello: () => import('~/components/home/hello/hello.vue'),
    about: () => import('~/components/home/about/about.vue'),
    services: () => import('~/components/home/services/services.vue'),
    experience: () => import('~/components/home/experience/experience.vue'),
    skills: () => import('~/components/home/skills/skills.vue'),
    contact: () => import('~/components/home/contact/contact.vue'),
    mainFooter: () => import('~/components/footer/footer.vue')
  }
})
export default class Home extends Vue {
}

</script>

<style lang="scss">
.home {
  position: relative;
}
</style>
