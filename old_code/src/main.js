// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueParticles from 'vue-particles'
import Vuex from 'vuex'
import 'animate.css'
import {Validator} from VeeValidate from 'vee-validate';

import messages from 'vee-validate/dist/locale/pl'
import TweenMax from 'gsap'
import store from './store'
import router from './router'
import App from './App.vue'

Vue.use(VueParticles)
Vue.use(Vuex)
Vue.config.productionTip = false
const config = {
  errorBagName: 'errors', // change if property conflicts
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'pl',
  dictionary: false,
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true,
  i18n: null, // the vue-i18n plugin instance,
  i18nRootKey: 'validations' // the nested key under which the validation messsages will be located
}

Vue.use(VeeValidate, config)
Validator.localize('pl', messages)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
