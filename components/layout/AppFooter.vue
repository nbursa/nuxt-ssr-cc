<template lang="pug">
  .bg-grey-lighter.p-8
    .mb-4(class='sm:flex')
      .h-auto(class='sm:w-1/4')
        .text-orange.mb-2 Orange
        ul.list-reset.leading-normal
          li.text-grey(class='hover:text-orange') One
          li.text-grey(class='hover:text-orange') Two
          li.text-grey(class='hover:text-orange') Three
          li.text-grey(class='hover:text-orange') Four
          li.text-grey(class='hover:text-orange') Five
          li.text-grey(class='hover:text-orange') Six
          li.text-grey(class='hover:text-orange') Seven
          li.text-grey(class='hover:text-orange') Eight
      .h-auto.mt-8(class='sm:w-1/4 sm:mt-0')
        .text-blue.mb-2 Blue
        ul.list-reset.leading-normal
          li.text-grey(class='hover:text-blue') One
          li.text-grey(class='hover:text-blue') Two
          li.text-grey(class='hover:text-blue') Three
        .text-blue-light.mb-2.mt-4 Blue-light
        ul.list-reset.leading-normal
          li.text-grey(class='hover:text-blue-light') One
          li.text-grey(class='hover:text-blue-light') Two
          li.text-grey(class='hover:text-blue-light') Three
      .h-auto.mt-8(class='sm:w-1/4 sm:mt-0')
        .text-green-dark.mb-2 Green-dark
        ul.list-reset.leading-normal
          li.text-grey(class='hover:text-green-dark') One
          li.text-grey(class='hover:text-green-dark') Two
          li.text-grey(class='hover:text-green-dark') Three
        .text-green-light.mb-2.mt-4 Green-light
        ul.list-reset.leading-normal
          li.text-grey(class='hover:text-green-light') One
          li.text-grey(class='hover:text-green-light') Two
          li.text-grey(class='hover:text-green-light') Three
      .mt-8.h-auto.text-right.flex.flex-col.justify-end(class='sm:w-1/2 sm:mt-0')
        h3.text-red.mb-2 Newsletter
        p.text-grey.leading-normal Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur.
        .mt-4.flex.w-full
          input.p-2.border.border-grey-light.round.text-grey-dark.text-sm.h-auto.w-full(type='text' placeholder='Your email address')
          button.bg-orange.text-grey.border.border-grey-light.rounded.h-auto.text-xs.p-3(class='hover:border-grey-dark') Subscribe

</template>
<script lang="ts"></script>
<style lang="sass"></style>
