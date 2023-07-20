<script setup>
import { RouterLink } from 'vue-router'
import NavigationMenuAmber from '@/components/molecules/navigation/variants/NavigationMenuAmber.vue'
</script>

<template lang="pug">
.root
    RouterLink(to="/")
        picture
            img.logo(src="/marble-logo-white.svg")
    NavigationMenuAmber.menu
</template>

<style lang="sass" scoped>
.root
    position: fixed
    width: 100vw
    height: 70px
    padding: 20px
    z-index: 100
.logo
    width: 50px
    display: inline-block
    vertical-align: middle
.menu
    position: absolute
    right: 10px
</style>
