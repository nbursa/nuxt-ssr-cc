<template lang="pug">
  #main
    app-navbar
    Nuxt
    app-footer
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import AppFooter from '~/components/layout/AppNavbar.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'

@Component({
  components: {
    AppNavbar,
    AppFooter,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="sass">
@import "global"
::-webkit-scrollbar
  width: 5px
  background-color: transparent
  overflow-x: visible
  &-track
    background-color: transparent
  &-thumb
    background-color: #449fdb
    width: 15px
    border-radius: 5px
    position: absolute
    bottom: 0
</style>
