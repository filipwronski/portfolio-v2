<template>
    <div class="skills">
        <div v-if="sliderVisible">
            <slick ref="slider" class="slider" :options="sliderOptions">
                <div v-for="skill in skills" class="slide" :change="test">
                    <h1>{{ skill.name }}</h1>
                    <p>{{ skill.description}}</p>
                </div>
            </slick>
            <slick ref="slider-nav" class="slider-nav" :options="sliderNavOptions">
                <div v-for="skill in skills" class="img-wrapper"><img :src="loadImage(skill.image)" alt=""></div>
            </slick>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: 'Skills',
        components: {Slick},
        beforeRouteLeave(to, from, next) {
            this.sliderVisible = false;
            setTimeout(function () {
                next();
            }, 10)
        },
        data() {
            return {
                sliderVisible: true,
                sliderOptions: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav',
                },
                sliderNavOptions: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    asNavFor: '.slider',
                    dots: false,
                    arrows: false,
                    infinite: true,
                    centerMode: true,
                    focusOnSelect: true,
                    swipe: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 5
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 3
                            }
                        }
                    ]
                },
                skills: [
                    {
                        name: 'Vue js',
                        description: "Frontendowy framework JS, który łączy zalety Angulara oraz Reacta. Użyłem go w 5 projektach produkcyjnych - jednym z nich jest ta strona oraz kilku testowych. Podczas pracy z Vue wykorzystuję biblioteki takie jak vuex (odpowiednik redux w React), axios, nuxt (pozwala na SSR).",
                        image: 'vue-logo.png'
                    },
                    {
                        name: 'Symfony',
                        description: 'Rozbudowany framework PHP, który znaczenie przyśpiesza pracę przy tworzeniu aplikacji webowych. Posiada ogromną ilość bibliotek, które pozwalają na łatwą integrację i konfigurację najpopularniejszych rozwiązań. Podczas pracy z Symfony często używam Doctrine do obsługi komunikacji z bazą danych. ',
                        image: 'symfony-logo.png'
                    },
                    {
                        name: 'Php',
                        description: 'Język programowania z którym jestem zawowdo najdłużej związany. Wykorzystuję go zarówno podczas tworzenia API aplikacji webowych jak i podczas budowy prostych stron internetowych opartych o CMS Wordpress. Podczas pracy z PHP najczęściej wykorzystuję framework Symfony.',
                        image: 'php-logo.png'
                    },
                    {
                        name: 'Node Js',
                        description: 'Środowisko uruchomieniowe JS, które pozwala na używanie Javascript podobnie jak PHP - po stronie serwera. W połączeniu z framework Express Js oraz dostępną dużą ilością bibliotek pozwala na budowanie zaawansowanych rozwiązań webowych. Jest to idealne narzędzie dla full-stack developera.',
                        image: 'nodejs-logo.png'
                    },
                    {
                        name: 'Git',
                        description: 'Rozproszonym systemem kontroli wersji. Pozwala mi na wersjonowanie kodu, wspomaga mnie podczas zespołowej pracy przy projekcie. Wykorzystuję go również przy auto deploy razem z Jenkins. To niezbędne narzędzie, dostarczające backupy kodu oraz pozwalające unikać wielu błędów.',
                        image: 'git-logo.png'
                    },
                    {
                        name: 'Javascript',
                        description: 'Drugi z języków programowania, który wykorzystuję w czasie codziennej pracy. Podczas programowania w Javascript używam bibliotek takich jak vuejs, jquery, expressjs, gsap, fullpagejs i wiele innych. Potrfię użyć możliwości tego języka zarówno do pisania warstwy front-end i back-end',
                        image: 'js-logo.png'
                    },
                    {
                        name: 'MySQL',
                        description: 'Podczas pracy z projektem w którym trzeba przechowywać dane w relacyjnej bazie danych wybieram Mysql. Potrafię projektować wydajne bazy danych dopasowane do wymagań projektu. Naukę SQL rozpocząłem na studiach, gdzie korzystałem z Oracle SQL i PLSQL.',
                        image: 'mysql-logo.png'
                    },
                    {
                        name: 'Webpack',
                        description: 'Module bundler, którego używam podczas pracy z Javascript. W połączeniu z Babel daje mi możliwość wykorzystywania nowszych wersji Javscript, które nie są jeszcze wspierane przez przeglądarki. Webpack pozwala mi również na korzystanie z preprocesora CSS - SASS. ',
                        image: 'webpack-logo.png'
                    },
                    {
                        name: 'Api',
                        description: 'W wielu projektach tworzę interfejs programowania aplikacji, pozwala mi on na łatwą komunikację między modułami aplikacji. Najczęściej wykorzystuję API podczas komunikacji frontendu i backendu. Potrafię budować REST API oraz API w oparciu o GraphQL.',
                        image: 'api-logo.png'
                    },
                    {
                        name: 'Wordpress',
                        description: 'Najpopularniejszy CMS, który odpowiada za działanie sporej części stron w Internecie. Mimo, że nie lubię go wykorzystywać stworzyłem w nim wiele stron internetowych, które są łatwe w edycji oraz przyjazne SEO.',
                        image: 'wordpress-logo.png'
                    },
                    {
                        name: 'Redis',
                        description: 'Baza danych NoSQL, którą wykorzystuję podczas pracy z danymi, których potrzebuję jedynie przez krótki czas. Dzięki swojej wydajności świetnie sprawdza się w wielu projektach jako narzędzie wspomagające pracę relacyjnej bazy danych',
                        image: 'redis-logo.png'
                    },
                    {
                        name: 'RabbitMQ',
                        description: 'Message broker, którego używam do obsługi kolejek w aplikacji. Kiedy należy wykonać wiele czasochłonnych zadań takich jak generowanie plików PDF lub wysłanie dużej ilości maili wtedy wiem, że z tymi zadaniami świetnie poradzi sobie RabbitMQ',
                        image: 'rabbit-logo.png'
                    },
                    {
                        name: 'Framework 7',
                        description: 'Kiedy tworzę aplikację hybdrydową wykorzystuję ten Framework HTML wraz z VueJs. Zawiera on gotowe, najczęściej wykorzystywane moduły z których składa się aplikacja mobilna. Dzięki temu w łatwy sposób przy użyciu HTML i Javascript jestem w stanie stworzyć proste aplikacjie mobilne.',
                        image: 'f7-logo.png'
                    },
                    {
                        name: 'Phonegap',
                        description: 'Framework pozwalający tworzyć aplikacje mobilne przy użyciu HTML, Javascript i CSS. To własnie on zamienia aplikację webowąnapisaną przy użyciu Framework 7 i Vue Js w aplikację hybdrydową, którą można uruchomić zarówno w systemie Android, iOS oraz WindowsPhone.',
                        image: 'phonegap-logo.png'
                    },
                    {
                        name: 'SASS',
                        description: 'Pre-procesor CSS, który ułatwia tworzenie arkuszy stylów. Dzięki niemu zyskuję możliwość tworzenia zmiennych, pętli i warunków w kodzie css. Posiada też składnię, która przyśpiesza pisanie kodu i ułatwia mi stosowanie metodyk takich jak BEM. Używam go w większości projektów.',
                        image: 'sass-logo.png'
                    },
                    {
                        name: 'HTML',
                        description: 'W większości moich projektów wykorzystuję HTML5. Znam zasady związane z SEO i potrafię je wykorzystać w celu pozycjonowania strony. Potrafię korzystać z struktur danych takich jak schema.org i łączyć je z poprawną semantyką HTML5.',
                        image: 'html-logo.png'
                    },
                ]
            }
        },
        mounted: function () {
            this.sliderVisible = true;
        },
        methods: {
            loadImage(imgName) {
                return require('../../assets/' + imgName)
            },
            test: function () {
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../../styles/slick';

    .skills {
        position: relative;
        .slider {
            width: 100%;
            height: 68vh;
            .slick-list {
                height: 100%;
                .slick-track {
                    height: 100%;
                    .slick-slide {
                        display: flex;
                        justify-content: center;
                        align-items: center;;
                        p {
                            bottom: -100px;
                            opacity: 0;
                            position: relative;
                            max-width: 600px;
                            line-height: 28px;
                            transition: all 0s;
                            font-size: 16px;
                        }
                        h1 {
                            top: -100px;
                            opacity: 0;
                            position: relative;
                            text-transform: uppercase;
                            font-size: 24px;
                            font-weight: bold;
                            transition: all 0s;
                        }
                        &.slick-current {
                            p {
                                bottom: 0;
                                opacity: 1;
                                transition: all 1.5s;
                            }
                            h1 {
                                top: 0;
                                opacity: 1;
                                transition: all 1.5s;
                            }
                        }
                    }
                }
            }
        }
        .slider-nav {
            div {
                outline: none;
            }
            .slick-track {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 140px;
            }
            .slick-slide {
                cursor: pointer;
                transition: all .4s;
                filter: brightness(10);
                display: flex;
                padding: 20px;
                justify-content: center;
                align-items: center;
                &.slick-current {
                    filter: brightness(1);
                    img {
                        transform: scale(1.7);
                        transition: all .4s;
                    }
                }
                img {
                    margin: 0 auto;
                    max-width: 40px;
                    transition: all .4s;
                }
            }

        }
    }
</style>
