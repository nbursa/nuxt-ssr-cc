<template lang="pug">
  #main
    app-navbar
    Nuxt
    app-footer
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppFooter from '~/components/layout/AppFooter.vue'
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
