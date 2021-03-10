<template lang="pug">
  .container
    //.contact
    //  .form-body
    //    form.form.animated.bounceInLeft
    //      h2 {{ $translate('contact.title') }}
    //      .form-inputs
    //        .form-inputs__field
    //          input.form-inputs__field-input.in-fi(
    //            v-model="form.name",
    //            type="text",
    //            name="name",
    //            id="ime",
    //            data-errormessage-value-missing="Required",
    //            data-errormessage-type-mismatch="Too short",
    //            placeholder=" ",
    //            required="",
    //            @mouseenter="inputHoverEvent",
    //            @mouseleave="inputLeaveEvent"
    //          )
    //          label(for="ime") {{ $translate('contact.form_name') }}
    //        .input__field
    //          input.form-inputs__field-input.in-fi(
    //            v-model="form.mail",
    //            type="email",
    //            name="mail",
    //            id="mail",
    //            data-errormessage="Enter valid email address i.e. example@example.com",
    //            placeholder=" ",
    //            required="",
    //            @mouseenter="inputHoverEvent",
    //            @mouseleave="inputLeaveEvent"
    //          )
    //          label(for="mail") {{ $translate('contact.form_email') }}
    //        .input__field
    //          textarea.form-inputs__field-textarea.in-fi(
    //            v-model="form.poruka",
    //            name="poruka",
    //            cols="50",
    //            id="poruka",
    //            placeholder=" ",
    //            required="",
    //            @mouseenter="inputHoverEvent",
    //            @mouseleave="inputLeaveEvent"
    //          )
    //          label(for="poruka") {{ $translate('contact.form_message') }}
    //  .form-controls.animated.bounceInRight
    //    button.btn(
    //      type="submit",
    //      @click.prevent="submitForm()",
    //      @mouseover="hoverEvent",
    //      @mouseleave="leaveEvent"
    //    ) {{ $translate('contact.form_send') }}
    //    .form-messages
    //    .inline
    //      router-link.link.openpop(
    //        to="/request",
    //        @mouseover.native="hoverEvent",
    //        @mouseleave.native="leaveEvent"
    //      ) {{ $translate('contact.form_contact') }}
    div.text-left
      h1.title Contact
      h2.subtitle Page
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component
export default class ContactPage extends Vue {}
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
