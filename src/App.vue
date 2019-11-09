<template>
    <div id="app">
        <div class="menu">
            <router-link to="/" class="logo-link"><span class="logo">Filip Wroński</span></router-link>
            <Navigation/>
        </div>
        <transition mode="out-in" name="fade">
            <router-view/>
        </transition>
        <footer class="main-footer">
            <span>Projekt i realizacja Filip Wroński © 2017</span>
            <a href="mailto:filip0822@gmail.com">filip0822@gmail.com</a>
        </footer>
    </div>
</template>
<script>
    import Navigation from '@/components/Navigation'

    export default {
        name: 'app',
        components: {Navigation},
    }
</script>
<style lang="scss">
    @import '/styles/global.scss';
</style>
