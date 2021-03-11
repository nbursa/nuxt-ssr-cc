<template lang="pug">
  .container
    .contact
      .form-body
        form.form.animated.bounceInLeft
          h2 {{ $translate('contact.title') }}
          .form-inputs
            .form-inputs__field
              base-input(
                :value="form[name]"
                :id="'name'"
                :placeholder="'Name'"
                :required="true"
                :label="$translate('contact.form_name')"
                @mouseenter="inputHoverEvent"
                @mouseleave="inputLeaveEvent"
                @change="form.name = value"
              )
            .input__field
              base-input(
                :value="form[mail]"
                :id="'mail'"
                :placeholder="'Mail'"
                :required="true"
                :label="$translate('contact.form_email')"
                @mouseenter="inputHoverEvent"
                @mouseleave="inputLeaveEvent"
                @change="form.mail = value"
              )
            .input__field
              textarea.form-inputs__field-textarea.in-fi(
                :value="form[message]"
                name="message"
                cols="50"
                id="message"
                placeholder="Message"
                required="false"
                @mouseenter="inputHoverEvent"
                @mouseleave="inputLeaveEvent"
                @change="form.message = value"
              )
              label(for="message") {{ $translate('contact.form_message') }}
      .form-controls.animated.bounceInRight
        button.btn(
          type="submit",
          @click="submitForm()",
          @mouseover="hoverEvent",
          @mouseleave="leaveEvent"
        ) {{ $translate('contact.form_send') }}
        .form-messages
        .inline
          router-link.link.openpop(
            to="/request",
            @mouseover.native="hoverEvent",
            @mouseleave.native="leaveEvent"
          ) {{ $translate('contact.form_contact') }}
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import translateMixin from '~/plugins/translate.mixin.ts'
import BaseInput from '~/components/base/BaseInput.vue'

interface Form {
  name: string
  mail: string
  message: string
}

// @BaseInput
@Component({
  components: {
    BaseInput,
  },
})
export default class ContactPage extends Mixins(translateMixin) {
  url: string = '../email/Contact.php'
  form: Form = {
    name: '',
    mail: '',
    message: '',
  }

  hoverEvent(e): void {
    this.$emit('hoverEvent', e)
  }

  leaveEvent(e): void {
    this.$emit('leaveEvent', e)
  }

  private inputHoverEvent(e): void {
    this.$emit('inputHoverEvent', e)
  }

  private inputLeaveEvent(e): void {
    this.$emit('inputLeaveEvent', e)
  }

  submitForm(): void {
    const qs = require('qs')
    this.$axios
      .post(this.url, qs.stringify(this.form))
      .then((response) => {
        console.log(response.data)
        this.form = {
          name: '',
          mail: '',
          message: '',
        }
      })
      .catch((error) => {
        console.log('err; ', error)
      })
  }

  updateFormItem(payload: object) {
    const { formItem, value } = payload
    console.log('name e: ', value)
    this.form[formItem] = value
  }

  mailVal(e: string) {
    console.log('mail e: ', e)
    this.form.mail = e
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
