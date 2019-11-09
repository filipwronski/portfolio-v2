<template>
  <div class="about">
    <div class="grid">
      <div class="col-6_sm-12-middle">
        <transition mode="out-in" name="fade-up">
          <div v-if="loaded" class="about-wrapper">
            <div class="about__description">
              <div class="grid">
                <div class="col-6_sm-12">
                  <img class="about__image" :src="loadImage('filip.jpg')" alt="">
                </div>
                <div class="col-6_sm-12">
                  <p>
                    Pracuję jako Full-stack developer od 2014 roku, łączę technologie backendowe i
                    frontendowe ponieważ cenię sobie samodzielność i niezależność w czasie
                    realizacji
                    projektu. Nie zmienia to faktu, że lubię pracować w zespole zarówno jako osoba,
                    która
                    zdobywa doświadczenie oraz jako osoba która dzieli się doświadczeniem.
                  </p>
                </div>
              </div>
            </div>
            <div class="about__exp" :class="{'active':aboutActive === true}">
              <transition mode="out-in" name="fade">
                <h1 v-if="expShow" v-html="experienceTitle()" />
              </transition>
              <transition mode="out-in" name="fade">
                <div v-if="expShow" v-html="experienceText()" />
              </transition>
            </div>
            <div class="about-mobile">
              <div class="position">
                <span class="position__date">2007-2011</span>
                <span class="position__text">Technikum Informatyczne</span>
                <p>Podczas nauki w technikum zdobyłem ogólną wiedzę związaną ze sprzętem komputerowym oraz sieciami komputerowymi. W tym czasie korzystałem z HTML i Javascript oraz uczyłem się programowania w języku C++ z którym pierwszą styczność miałem już w gimnazjum. W tym czasie stworzyłem swoje pierwsze strony internetowe oraz prowadziłem bloga.</p>
              </div>
              <div class="position">
                <span class="position__date">2011-2014</span>
                <span class="position__text">Studia</span>
                <p>Kolejnym krokiem w mojej edukacji był wybór studiów. Podczas 3 lat nauki podniosłem swoje umiejętności związane z programowaniem oraz bazami danych. Poznałem świat programowania od strony matematyki i algorytmów. Dzięki studiom spotkałem prawdziwych pasjonatów, którzy przyczynili się do mojego rozwoju.<br> Tematem mojej pracy licencjackiej była aplikacja webowa służąca do zarządzania magazynem firmy w której pracowałem podczas studiów. Napisałem ją przy użyciu PHP, Javascript i bazy danych MySQL. Aplikacja wykorzystywała do komunikacji technologię AJAX. </p>
              </div>
              <div class="position">
                <span class="position__date">2014-2014</span>
                <span class="position__text">Bristol Laboratories</span>
                <p>W przerwie między studiami pierwszego, a drugiego stopnia wyjechałem do UK, podjąłem tam decyzję o rezygnacji z dalszej edukacji akademickiej i skupieniu się na samodzielnym rozwoju zawodowym. Pracowałem jako kontroler jakości w firmie farmaceutycznej Bristol Laboratories. W tym czasie nauczyłem się funkcjonowania w międzynarodowym zespole oraz rozwijałem się w całkowicie nowej branży. Uznałem jednak, że czas wrócić na ścieżkę związaną z IT.</p>
              </div>
              <div class="position">
                <span class="position__date">2014-2016</span>
                <span class="position__text">Grupa Tense</span>
                <p>Od marca 2014 pracowałem jako front-end developer poznańskiej agencji interaktywnej Grupa Tense. W codziennej pracy wykonywałem również obowiązki związane z backendem w PHP. Podczas pracy w tej firmie poznałem również zagadnienia związane z branżą SEO. Do moich codziennych obowiązków należało tworzenie stron internetowych opartych o CMS Wordpress, budowa sklepów w oparciu o system Shoper. W pracy wykorzystywałem między innymi: PHP, Javascript, MySQL.</p>
              </div>
              <div class="position">
                <span class="position__date">2017-obecnie</span>
                <span class="position__text">Cape Morris</span>
                <p>Aktualnie pracuję w warszawskiej agencji Cape Morris. W codziennej pracy wykorzystuje technologie takie jak Symfony, Redis, RabbitMQ, VueJs. Realizuję zróżnicowane projekty dla branży marketingowej: strony internetowe, sklepy, systemy CRM, aplikacje konkursowe, aplikacje wykorzystujące Facebook API. Różnorodność zleceń sprawiła, że czuję się swobodnie w kontakcie z nowymi technologiami i wyzywaniami. </p>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="col-6_sm-12-middle">
        <div class="timeline-wrapper">
          <div class="timeline">
            <span class="pointer" />
            <div
              id="position-1"
              :class="{'position--active':selectedPosition == 1}"
              class="position position--left"
              @click="selectPosition(1)"
            >
              <span class="position__date">2007-2011</span>
              <span class="position__text">Technikum Informatyczne</span>
            </div>
            <div
              id="position-2"
              :class="{'position--active':selectedPosition === 2}"
              class="position  position--right"
              @click="selectPosition(2)"
            >
              <span class="position__date">2011-2014</span>
              <span class="position__text">Studia</span>
            </div>
            <div
              id="position-3"
              :class="{'position--active':selectedPosition === 3}"
              class="position position--left"
              @click="selectPosition(3)"
            >
              <span class="position__date">2014-2014</span>
              <span class="position__text">Bristol Laboratories</span>
            </div>
            <div
              id="position-4"
              :class="{'position--active':selectedPosition === 4}"
              class="position position--right"
              @click="selectPosition(4)"
            >
              <span class="position__date">2014-2016</span>
              <span class="position__text">Grupa Tense</span>
            </div>
            <div
              id="position-5"
              :class="{'position--active':selectedPosition === 5}"
              class="position position--left"
              @click="selectPosition(5)"
            >
              <span class="position__date">2017-obecnie</span>
              <span class="position__text">Cape Morris</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite, Power2, TimelineLite } from 'gsap'

export default {
  name: 'About',
  data () {
    return {
      aboutActive: false,
      expShow: true,
      selectedPosition: 1,
      msg: 'Welcome to Your Vue.js App',
      loaded: false,
      aboutContent: {
        1: {
          title: 'Technikum Informatyczne',
          text: '<p>Podczas nauki w technikum zdobyłem ogólną wiedzę związaną ze sprzętem komputerowym oraz sieciami komputerowymi. W tym czasie korzystałem z HTML i Javascript oraz uczyłem się programowania w języku C++ z którym pierwszą styczność miałem już w gimnazjum. W tym czasie stworzyłem swoje pierwsze strony internetowe oraz prowadziłem bloga.</p>'
        },
        2: {
          title: 'Studia',
          text: '<p>Kolejnym krokiem w mojej edukacji był wybór studiów. Podczas 3 lat nauki podniosłem swoje umiejętności związane z programowaniem oraz bazami danych. Poznałem świat programowania od strony matematyki i algorytmów. Dzięki studiom spotkałem prawdziwych pasjonatów, którzy przyczynili się do mojego rozwoju.<br> Tematem mojej pracy licencjackiej była aplikacja webowa służąca do zarządzania magazynem firmy w której pracowałem podczas studiów. Napisałem ją przy użyciu PHP, Javascript i bazy danych MySQL. Aplikacja wykorzystywała do komunikacji technologię AJAX. </p>'
        },
        3: {
          title: 'Bristol Laboratories',
          text: '<p>W przerwie między studiami pierwszego, a drugiego stopnia wyjechałem do UK, podjąłem tam decyzję o rezygnacji z dalszej edukacji akademickiej i skupieniu się na samodzielnym rozwoju zawodowym. Pracowałem jako kontroler jakości w firmie farmaceutycznej Bristol Laboratories. W tym czasie nauczyłem się funkcjonowania w międzynarodowym zespole oraz rozwijałem się w całkowicie nowej branży. Uznałem jednak, że czas wrócić na ścieżkę związaną z IT.</p>'
        },
        4: {
          title: 'Grupa Tense',
          text: '<p>Od marca 2014 pracowałem jako front-end developer poznańskiej agencji interaktywnej Grupa Tense. W codziennej pracy wykonywałem również obowiązki związane z backendem w PHP. Podczas pracy w tej firmie poznałem również zagadnienia związane z branżą SEO. Do moich codziennych obowiązków należało tworzenie stron internetowych opartych o CMS Wordpress, budowa sklepów w oparciu o system Shoper. W pracy wykorzystywałem między innymi: PHP, Javascript, MySQL.</p>'
        },
        5: {
          title: 'Cape Morris',
          text: '<p>Aktualnie pracuję w warszawskiej agencji Cape Morris. W codziennej pracy wykorzystuje technologie takie jak Symfony, Redis, RabbitMQ, VueJs. Realizuję zróżnicowane projekty dla branży marketingowej: strony internetowe, sklepy, systemy CRM, aplikacje konkursowe, aplikacje wykorzystujące Facebook API. Różnorodność zleceń sprawiła, że czuję się swobodnie w kontakcie z nowymi technologiami i wyzywaniami. </p>'
        }
      }
    }
  },

  mounted () {
    this.timeline()
    this.aboutActive = true
    this.loaded = true
  },
  methods: {
    timeline () {
      const tl = new TimelineLite()
      tl.to('.timeline', 0.8, { minHeight: '600px', opacity: 1 })
        .to('#position-1', 0.4, { opacity: 1, left: '-450px' })
        .to('.pointer', 0.2, { opacity: 0.5 })
        .to('#position-2', 0.6, { opacity: 1, right: '-450px' })
        .to('#position-3', 0.6, { opacity: 1, left: '-450px' })
        .to('#position-4', 0.6, { opacity: 1, right: '-450px' })
        .to('#position-5', 0.6, { opacity: 1, left: '-450px' })
        .to('#position-6', 0.6, { opacity: 1, right: '-450px' })
    },
    loadImage (imgName) {
      return require('../../assets/' + imgName)
    },
    selectPosition (number) {
      this.movePointer(number)
      this.selectedPosition = number
      this.expShow = false
      this.aboutActive = false
      const self = this
      setTimeout(function () {
        self.expShow = true
        self.aboutActive = true
      }, 400)
    },
    movePointer (number) {
      const tl = new TimelineLite()
      const bottom = ((number - 1) * 120) + 15 + 'px'
      tl.to('.pointer', 0.7, { bottom, ease: Power2.easeOut })
    },
    experienceTitle () {
      return this.aboutContent[this.selectedPosition].title
    },
    experienceText () {
      return this.aboutContent[this.selectedPosition].text
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../../styles/pages/about.scss';
</style>
