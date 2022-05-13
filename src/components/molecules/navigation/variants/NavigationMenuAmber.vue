<script setup>
import NavigationButton from '@/components/atoms/navigation/NavigationButton.vue'
</script>

<template lang="pug">
span
    a.link(href="//amber.marbl.cc") Docs
    NavigationButton(name="Donate" path="/donate" color="white")
</template>

<style lang="sass">
.link
    font-size: 18px
    margin-right: 20px
    font-family: Lato
    display: inline-block
    color: white
    text-decoration: none
    font-weight: 400
    vertical-align: middle
</style>
