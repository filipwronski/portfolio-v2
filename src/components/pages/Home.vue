<template>
    <div class="home">

        <h1 class="home-title">#strona jest nadal w budowie#<br>
            Cześć jestem <strong>Filip</strong> i mogę<br>
            zarobić dla Ciebie pieniądze.
        </h1>
        <div class="buttons-wrapper">
            <router-link class="button button--contact" to="/o-mnie">Czym się zajmuję?</router-link>
            <router-link class="button button--contact" to="/umiejetnosci">Co potrafię?</router-link>
            <router-link class="button button--contact" to="/portfolio">Co już zrobiłem?</router-link>
        </div>
    </div>
</template>

<script>
    import {TweenMax, Power2, TimelineMax, MorphSVGPlugin} from "gsap";


    export default {
        name: 'Home',

        data() {
            return {
                loaded: false,
                msg: 'Welcome to Your Vue.js App',
                scrolled: false,
                isHome: false,
                firstAnimationActive: false
            }
        },
        mounted: function () {
            this.loaded = true;


        },
        methods: {
            firstAnimation: function () {
                TweenMax.to("#first-image", 1, {morphSVG: "#first-image"});
            },
            secondAnimation: function () {
                TweenMax.to("#first-image", 1, {morphSVG: "#second-image"});
            },
            thirdAnimation: function () {
                TweenMax.to("#first-image", 1, {morphSVG: "#third-image"});
            },
            fourthAnimation: function () {
                TweenMax.to("#first-image", 1, {morphSVG: "#fourth-image"});
            },
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        }
        ,
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    #svg-wrapper {
        overflow: visible;
    }

    #first-image {
        fill: #fff;
    }

    #second-image {
        visibility: hidden;

    }

    #third-image {
        visibility: hidden;
        fill: #fff;
    }

    #fourth-image {
        visibility: hidden;
        fill: #fff;
    }

    body {
        &.homepage {
            overflow: auto;
            .menu {
                position: fixed;
                width: calc(100% - 30px);
            }
        }
    }

    .home-image {
        path {

        }
    }

    .home {
        min-height: 100%;
        position: relative;
        height: calc(100vh - 110px);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        &__content {
            z-index: 20;
            position: relative;
        }
        .screen {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 0;
        min-height: 100%;
    }

    .home-title {
        font-weight: 400;
        line-height: 60px;
        position: relative;
        margin-bottom: 40px;
    }

    .buttons-wrapper {
        .button {
            margin: 10px 5px;
        }
    }

    .spaceship {
        width: 40px;
        position: absolute;
        left: -70px;
        bottom: -70px;
        opacity: .7;
        &__flame1 {
            background: yellow;
            width: 6px;
            height: 14px;
            position: absolute;
            left: -5px;
            top: 34px;
            transform: skewY(-52deg) rotate(-47deg);
        }
        &__flame2 {
            background: red;
            width: 3px;
            height: 7px;
            position: absolute;
            left: 0px;
            top: 34px;
            transform: skewY(-52deg) rotate(-47deg);

        }
    }

</style>
