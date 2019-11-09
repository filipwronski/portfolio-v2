<template>
  <div class="contact">
    <transition mode="out-in" name="fade-up">
      <h1 v-if="loaded" class="contact__title">
        Skontaktuj się ze mną
      </h1>
    </transition>
    <transition mode="out-in" name="fade-up">
      <form v-if="loaded" class="contact__form" @submit.prevent="sendMail">
        <div class="grid">
          <div class="col-6_sm-12">
            <input v-model="mail.name" v-validate="{ required: true}" name="imie" placeholder="Imię">
            <span v-show="errors.has('imie')" class="help is-danger">{{ errors.first('imie') }}</span>
          </div>
          <div class="col-6_sm-12">
            <input v-model="mail.surname" v-validate="{ required: true}" name="surname" placeholder="Nazwisko">
            <span v-show="errors.has('surname')" class="help is-danger">{{ errors.first('surname') }}</span>
          </div>
          <div class="col-6_sm-12">
            <input v-model="mail.mail" v-validate="{ required: true, email: true }" name="email" placeholder="E-mail">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </div>
          <div class="col-6_sm-12">
            <input v-model="mail.phone" v-validate="{ required: true}" name="phone" placeholder="Numer telefonu">
            <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
          </div>
          <div class="col-12">
            <input v-model="mail.topic" v-validate="{ required: true}" name="topic" placeholder="Temat">
            <span v-show="errors.has('topic')" class="help is-danger">{{ errors.first('topic') }}</span>
          </div>
          <div class="col-12">
            <textarea v-model="mail.text" v-validate="{ required: true}" name="text" placeholder="Tekst" />
            <span v-show="errors.has('text')" class="help is-danger">{{ errors.first('text') }}</span>
          </div>
          <div class="col-12">
            <button class="button button--submit">
              Wyślij
            </button>
          </div>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      loaded: false,
      mail: {
        name: '',
        surname: '',
        mail: '',
        phone: '',
        topic: '',
        text: ''
      }

    }
  },
  mounted () {
    this.loaded = true
  },
  methods: {
    sendMail () {
      this.validateBeforeSubmit()
      console.log(this.errors.all())
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('From Submitted!')
          return
        }
        alert('Correct them errors!')
      })
    }
  }
}
</script>

<style lang="scss">
    @import '../../styles/pages/contact.scss';
</style>
