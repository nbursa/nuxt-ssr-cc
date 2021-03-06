<template lang="pug">
  .container
    nuxt-content.text-left.p-6(:document="article")
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({
  mounted() {
    console.log('mount: ', this)
  },
})
export default class BlogPage extends Vue {
  async asyncData({ $content, params }) {
    // console.log('async data: ', $route)
    const article = await $content('hello', params.slug).fetch()
    return { article }
  }
}
</script>

<style></style>
