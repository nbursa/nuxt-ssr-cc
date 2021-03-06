<template lang="pug">
  nav.bg-gray-800
    .max-w-7xl.mx-auto.px-2(class="sm:px-6 lg:px-8")
      .relative.flex.items-center.justify-between.h-16
        .absolute.inset-y-0.left-0.flex.items-center(class="sm:hidden")
          button.inline-flex.items-center.justify-center.p-2.rounded-md.text-gray-400(type="button" class="hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" @click="toggleMobileNav")
            span.sr-only Open main menu
            svg.block.h-5.w-5(v-if="!mobileNav" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor" aria-hidden="true")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
            svg.block.h-5.w-5(v-if="mobileNav" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor" aria-hidden="true")
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")
        .flex-1.flex.items-center.justify-center(class="sm:items-stretch sm:justify-start")
          .flex-shrink-0.flex.items-center
            span.icon-001
            img.logo.block.h-8.w-auto(src="~assets/icons/capicon/svg/004.svg" alt="Logo")
          .hidden(class="sm:block sm:ml-6")
            .flex.space-x-4
              NuxtLink.text-white.px-3.py-2.rounded-md.text-sm.font-medium(to="/" class="hover:bg-gray-700 hover:text-white") Home
              NuxtLink.text-gray-300.px-3.py-2.rounded-md.text-sm.font-medium(to="/projects" class="hover:bg-gray-700 hover:text-white") Projects
              NuxtLink.text-gray-300.px-3.py-2.rounded-md.text-sm.font-medium(to="/blog" class="hover:bg-gray-700 hover:text-white") Blog
              NuxtLink.text-gray-300.px-3.py-2.rounded-md.text-sm.font-medium(to="/contact" class="hover:bg-gray-700 hover:text-white") Contact
        .absolute.inset-y-0.right-0.flex.items-center.pr-2(class="sm:static sm:inset-auto sm:ml-6 sm:pr-0")
          button.bg-gray-800.p-1.rounded-full.text-gray-400(class="hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white")
            span.sr-only
              | View notifications
            span.cil-energy.h-6.w-6
              path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9")
          .profile-dropdown.ml-3.relative
            div
              button#user-menu.bg-gray-800.flex.text-sm.rounded-full(class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-haspopup="true" @click="toggleMenu")
                span.sr-only
                  | Open user menu
                img.h-8.w-8.rounded-full(src="~assets/icons/capicon/svg/user.svg" alt="User icon")
            .origin-top-right.absolute.right-0.mt-2.w-48.rounded-md.shadow-lg.py-1.bg-white.ring-1.ring-black.ring-opacity-5(v-if="menuOpen" role="menu" aria-orientation="vertical" aria-labelledby="user-menu")
              NuxtLink.block.px-4.py-2.text-sm.text-gray-700(to="/profile" class="hover:bg-gray-100" role="menuitem") Profile
              NuxtLink.block.px-4.py-2.text-sm.text-gray-700(to="/settings" class="hover:bg-gray-100" role="menuitem") Settings
              NuxtLink.block.px-4.py-2.text-sm.text-gray-700(to="/sign-out" class="hover:bg-gray-100" role="menuitem") Sign out
    #mobile-menu(class="sm:block sm:ml-6 sm:hidden" :class="{hidden: !mobileNav}")
      .px-2.pt-2.pb-3.space-y-1
        NuxtLink.text-white.block.px-3.py-2.rounded-md.text-base.font-medium(to="/") Home
        NuxtLink.text-gray-300.block.px-3.py-2.rounded-md.text-base.font-medium(to="/projects" class="hover:bg-gray-700 hover:text-white") Projects
        NuxtLink.text-gray-300.block.px-3.py-2.rounded-md.text-base.font-medium(to="/blog" class="hover:bg-gray-700 hover:text-white") Blog
        NuxtLink.text-gray-300.block.px-3.py-2.rounded-md.text-base.font-medium(to="/contact" class="hover:bg-gray-700 hover:text-white") Contact
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class AppNavbar extends Vue {
  menuOpen: boolean = false
  mobileNav: boolean = false

  toggleMenu() {
    console.log('toggle menu: ', this.menuOpen)
    this.menuOpen = !this.menuOpen
  }

  toggleMobileNav() {
    console.log('toggle menu nav: ')
    this.mobileNav = !this.mobileNav
  }
}
</script>

<style lang="sass">
nav
  position: fixed
  top: 0
  left: 0
  width: 100%
  .nuxt-link-exact-active
    background-color: #35495e
  .logo svg
    fill: #449fdb
    stroke: #999999
</style>
