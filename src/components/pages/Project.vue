<template>
    <div>
        <div class="project" :class="activeProject">
            <vue-scrollbar classes="portfolio__scrollbar" ref="Scrollbar">
                <div class="portfolio__scroll-wrapper">
                    <img class="project__image" :src="loadImage(projects[activeProject].img)">
                    <h1 class="project__title">{{ projects[activeProject].title }}</h1>
                    <p class="project__header">
                        Użyte technologie:
                    </p>
                    <ul class="project__technology">
                        <li v-for="technology in projects[activeProject].technology">
                            {{ technology }}
                        </li>
                    </ul>
                    <p class="project__description" v-html="projects[activeProject].description"></p>
                </div>
            </vue-scrollbar>
        </div>
        <div class="project-mobile" :class="activeProject">
            <router-link to="/portfolio" class="project__back">
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve">
                    <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                </svg>
                <span>Wstecz</span>
            </router-link>
            <img class="project__image" :src="loadImage(projects[activeProject].img)">
            <h1 class="project__title">{{ projects[activeProject].title }}</h1>
            <p class="project__header">
                Użyte technologie:
            </p>
            <ul class="project__technology">
                <li v-for="technology in projects[activeProject].technology">
                    {{ technology }}
                </li>
            </ul>
            <p class="project__description" v-html="projects[activeProject].description"></p>
        </div>
    </div>
</template>

<script>
    import store from '../../store'
    import VueScrollbar from 'vue2-scrollbar'
    import _ from 'lodash'
    import {TweenLite, Power2, TimelineLite} from "gsap";

    export default {
        name: 'Project',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                activeProject: this.$route.params.name,
                projects: {
                    tefal: {
                        title: "Tefal - Kompan Smaku",
                        url: "kompansmaku.pl",
                        excerpt: "Projekt zrealizowany podczas współpracy z Cape Morris. Jest to portal z przepisami kulinarnymi przystosowanymi do robota kuchennego firmy Tefal. Wykorzystuje technologie takie jak: Symfony3, RabbitMQ, Doctrine.",
                        description: "Jest to portal z przepisami kulinarnymi przystosowanymi do robota kuchennego firmy Tefal.<br><br> Strona posiada takie fukcjonalności jak: panel administracyjny, panel użytkownika, wielokrokowy formularz dodawania przepisu, wysyłanie e-mail oraz smsów, generowanie pdfów, logowanie przez Facebook, zaawansowana wyszukiwarka.<br><br> Podczas budowy strony odpowiadałem za budowę backendu do budowy którego wyskorzystałem między innymi framework Symfony 3 oraz technologie takie jak RabbitMQ i Doctrine. Pisałem również skrypty JS po stronie frontendu - głównie do komunikacji z backendem.",
                        technology: [
                            'vuejs', 'php', 'javascript', 'redis', 'symfony', 'mysql', 'rabbitmq'
                        ],
                        img: "projekty/tefal.png"
                    },
                    jaf: {
                        title: "Jaf",
                        url: "kompansmaku.pl",
                        excerpt: "Jest to generator widoku tarasów przygotowany dla Jaf Polska. Dynamicznie generuje widok tarasu na podstawie danych wybranych z rozbudowanego menu.",
                        description: "Projekt zrealizowany podczas współpracy z Cape Morris. Jest to generator widoku tarasów przygotowany dla Jaf Polska. Dynamicznie generuje widok tarasu na podstawie danych wybranych z rozbudowanego menu.<br><br>Nakładanie warstw odbywa się dynamicznie w przypadku, kiedy dana konfiguracja wybrana jest pierwszy raz. W przeciwnym razie gotowy obraz pobierany jest z serwera.<br><br> Stworzyłem aplikację wykorzystując PHP, JS i AJAX. W projekcie odpowiadałem za backend oraz frontend. ",
                        technology: [
                            'vuejs', 'php', 'mysql', 'rabbitmq'
                        ],
                        img: "projekty/jaf.png"
                    },
                    zwierzyniec: {
                        title: "Browar Zwierzyniec",
                        url: "kompansmaku.pl",
                        excerpt: "Jest to strona internetowa Browaru Zwierzyniec. Posiada funkcjonalności takie jak: integracja z Instagram API, wyszukiwarka lokali na bazie Google Maps Api, rezerwacja terminów zwiedzania browaru.",
                        description: "Projekt zrealizowany podczas współpracy z Cape Morris. Jest to strona internetowa Browaru Zwierzyniec. Posiada funkcjonalnośi takie jak: integracja z Instagram API, wyszukiwarka lokali na bazie Google Maps Api, rezerwacja terminów zwiedzania browaru.<br><br> W projekcie odpowiadałem za backend oraz byłem członkiem 2 osobowego zespołu odpowiadającego za front-end (stworzyłem kilka widoków oraz wyszukiwarkę lokali).<br><br> Do budowy strony wykorzystałem technologie takie jak: PHP, SASS, Javascript oraz CMS Wordpress.",
                        technology: [
                            'vuejs', 'php', 'javascript', 'mysql', 'rabbitmq'
                        ],
                        img: "projekty/zwierzyniec.png"
                    },
                    zyrtec: {
                        title: "Zyrtec UCB",
                        url: "kompansmaku.pl",
                        excerpt: "Jest to strona internetowa firmy Zyrtec UCB. Posiada funkcjonalności takie jak: integracja z Instragram API, interaktywny kalendarz pyleń, quiz pomagający w diagnozie alergii.",
                        description: "Projekt zrealizowany podczas współpracy z Cape Morris. Jest to strona internetowa firmy Zyrtec UCB. Posiada funkcjonalności takie jak: integracja z Instragram API, interaktywny kalendarz pyleń, quiz pomagający w diagnozie alergii.<br><br> W projekcie odpowiadałem za backend oraz byłem członkiem 2 osobowe zespołu odpowiadającego za front-end. Do moich zadań należało stworzenie quizu. Do jego budowy wykorzystałem framework VueJs 2.<br><br> Podczas tworzenia strony wykorzystałem technologie takie jak PHP, Javascript, SASS oraz CMS Wordpress.",
                        technology: [
                            'vuejs', 'php', 'javascript', 'redis', 'symfony', 'mysql', 'rabbitmq'
                        ],
                        img: "projekty/zyrtec.png"
                    },
                    murapol: {
                        title: "Murapol Zgłoszenia",
                        url: "kompansmaku.pl",
                        excerpt: "Jest to aplikacja webowa służąca do generowania i wysyłania dokumentów. Zawiera interaktywne formularze zbierające dane, na podstawie których po przetworzeniu, generowane są pliki PDF. ",
                        description: "Projekt został zrealizowany podczas współpracy z Cape Morris. Jest to aplikacja webowa służąca do generowania i wysyłania dokumentów. Zawiera interaktywne formularze zbierające dane, na podstawie których po przetworzeniu, generowane są pliki PDF.<br><br> Do budowy aplikacji wykorzystałem język PHP wraz z frameworkiem Symonfy3, biblioteką doctrine oraz bazą danych MySQL.<br><br> W projekcie zajmowałem się backendem oraz frontendem.",
                        technology: [
                            'vuejs', 'php', 'javascript', 'mysql', 'rabbitmq'
                        ],
                        img: "projekty/cape.png"
                    },
                    tranquini: {
                        title: "Tranquini - mapa",
                        url: "kompansmaku.pl",
                        excerpt: "Jest to interaktywna mapa stworzona na bazie Google Maps oraz Google Places API. Do jej stworzenia wykorzystałem Javascript, Google Maps oraz Google Places API.",
                        description: "Projekt został zrealizowany podczas współpracy z Cape Morris. Jest to interaktywna mapa stworzona na bazie Google Maps oraz Google Places API.<br><br> Aplikacja posiada funkcję takie jak: wybór kraju wyszukiwania z automatycznym wczytywaniem lokalizacji, autocomplete wyszukiwarki dostosowany do wybranego kraju, grupowanie znaczników, okrąg pojawiający się przy odpowiednim zoomie, wyświetlanie listy ze szegółowymi danymi dotyczącymi punktów leżących w okręgu.<br><br> Mapę wykonałem samodzielnie wykorzystują API Googla oraz Javascript. ",
                        technology: [
                            'vuejs', 'php', 'javascript', 'redis', 'symfony', 'mysql', 'rabbitmq'
                        ],
                        img: "projekty/tranquini.png"
                    },
                    kumazu: {
                        title: "Kumazu",
                        url: "kompansmaku.pl",
                        excerpt: "Sklep internetowy zbudowany w oparciu o CMS Wordpress wraz z Woocommerce.",
                        description: "Projekt został zrealizowany podczas współpracy z Cape Morris. Sklep internetowy zbudowany w oparciu o Wordpress wraz z Woocommerce.<br><br> Podczas budowy strony odpowiadałem za backend i frontend. Wykorzystałem technologie takie jak PHP, Javascript oraz SASS. Podczas pracy korzystałme z narzędzia Gulp.js.",
                        technology: [
                            'vuejs', 'javascript', 'rabbitmq'
                        ],
                        img: "projekty/kumazu.png"
                    },
                    czterykadry: {
                        title: "Cztery Kadry",
                        url: "kompansmaku.pl",
                        excerpt: "Strona internetowa stworzona w oparciu o CMS Wordpress. Zawiera animacje stworzone przy użyciu CSS",
                        description: "Jest to strona internetowa stworzona we współpracy z grafikiem. Podczas jej budowy odpowiadałem za frontend oraz backend. Wykorzystałem technologie takie jak PHP, SASS, Javascript. Podczas budowy strony stworzyłem animacje wykorzystujące CSS",
                        technology: [
                            'vuejs', 'php', 'mysql', 'rabbitmq'
                        ],
                        img: "projekty/cztery.png"
                    },
                    odkurzacze: {
                        title: "Tefal - odkurzacze",
                        url: "kompansmaku.pl",
                        excerpt: "Gra w formie quizu stworzona dla firmy Tefal wykorzystująca VueJS 2. Posiada logowanie przez portal Facebook, wykorzystuje bazę danych noSQL - Redis.",
                        description: "Projekt został zrealizowany podczas współpracy z Cape Morris. Jest to gra w formie quizu stworzona dla firmy Tefal.<br><br> Gracze logują się do niej przez konta portalu Facebook. Każdy gracz może rozegra maksymalnie 10 gier w których musi odgadywać co przedstawia zabrudzony obrazek. W przypadku trudności możę użyć koła ratunkowego. W czasie gry przesyłane są między backendem i frontendem jedynie zaszyfrowany numer gry oraz odwiedź. Dzięki temu trudno jest sfałszować wyniki. Po zakończeniu gry wyniki są zapisywane w bazie danych MySQL.<br><br> Aplikację stworzyłem samodzielnie, frontend napisany jest w VueJS 2, komunikuje się z przez API z backendem napisanym w Symfony 3.",
                        technology: [
                            'vuejs', 'php', 'mysql', 'rabbitmq'
                        ],
                        img: "projekty/odkurzacze.png"
                    }
                },
                activeAdvancedSearch: false,
                showProject: false,
                filteredProjects: null,
                tags: ['vuejs', 'php', 'javascript', 'redis', 'symfony', 'mysql', 'rabbitmq']
            }
        },
        mounted: function () {
        },
        methods: {
            loadImage(imgName) {
                return require('../../assets/' + imgName)
            },
            hasProjects() {
                return this.filteredProjects.length
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.activeProject = to.params.name;
            next();
        },
        components: {
            VueScrollbar
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../../styles/pages/portfolio.scss';
</style>
